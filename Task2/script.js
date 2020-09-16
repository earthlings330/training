        
        /* ini variables */
        const mainDivId = 'card'
        const srcImgMale = "images/male.jpg"
        const srcImgFemale = "images/male.jpg"
        const altValue = "my_card"
        const className = "img"
        const childClassName = "body_card"

        /* get The size of localstorge*/
        const size = localStorage.length
        /* get all localstorge */
        const storege = localStorage

        /*
        * eventListener to page loding to add the content 
        */
        document.addEventListener('DOMContentLoaded',function(){
            var ob = getAllPokemons()
            console.log(ob)
            /*  
            * get the name from url using URLSearchParams
            * display the name in the header 
            */ 
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            var h1= document.getElementById("user_name")
            if(urlParams.has('name')){
                const user_name = urlParams.get('name')
                h1.innerHTML = user_name
                 //console.log(user_name)
            }
            else{
                h1.innerHTML = "User"
            }


            /* store all data in an array*/
            const names =[]
            let count=0
            // for(name in storege){
            //     if(count!=size){
            //         names.push(localStorage.getItem(name))
            //         count++
            //     }else{
            //         break
            //     }
            // }

            for(let i=0; i < localStorage.length; i++){
                    names.push(localStorage.getItem(localStorage.key(i)))
            }
    
            /* 
            *start craeting all element to display the data
            *we start creating the divs and li  
            *then we continue with craeting the card body 
            */
        for(var i =0;i<size;i++){
            createDivs("div",i)
            addElement("main","li","li",names[i])
            
        }
        for(var z= 0;z<size;z++){
        createImgs(mainDivId,"img",altValue,srcImgMale,z)
        createChildDivs(mainDivId, childClassName ,z)
        createContentForChildDivs(childClassName+z,"h1",names[z],z)
        console.log(z)
        }
        })

        function getAllPokemons() {
            const pokemonQuery = `
            query {
          Country {
              name
              flag{
                _id
                svgFile
              }
            }
          }`;

            return window
              .fetch("https://countries-274616.ew.r.appspot.com", {
                method: "POST",
                headers: { "content-type": "application/json;charset=UTF-8" },
                body: JSON.stringify({ query: pokemonQuery })
              })
              .then(r => r.json())
              .then(response => response.data);
          }
        

    function createDivs(elementTag, divNumber){
        const parent  = document.getElementById("main_sec")
        const newElement = document.createElement(elementTag)
        newElement.setAttribute('class',mainDivId)
        newElement.setAttribute('id',mainDivId+divNumber)
        parent.appendChild(newElement)
    }

    function createImgs(parentId,elementClass , altValue , srcValue,divNumber){
        const parent = document.getElementById(parentId+divNumber)
        const newElement = document.createElement("img")
        newElement.setAttribute('class',elementClass)
        newElement.setAttribute('alt',altValue)
        newElement.setAttribute('src',srcValue)
        parent.appendChild(newElement)

    }

    function createChildDivs(parentId, elementClass ,divNumber){
        const parent = document.getElementById(parentId+divNumber)
        const newElement = document.createElement("div")
        newElement.setAttribute('class',elementClass)
        newElement.setAttribute('id',elementClass+divNumber)
        parent.appendChild(newElement)
    }


    function createContentForChildDivs(parentId,elementTag,html,divNumber){
        const parent = document.getElementById(parentId)
        const newElement = document.createElement(elementTag)
        newElement.innerHTML = html
        parent.appendChild(newElement)
    
    }
  
    function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    const p = document.getElementById(parentId);
    const newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}