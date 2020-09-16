<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Home.css">
    <title>Document</title>
   
</head>
<body>
    <header>  
    <?php
    if(isset($_POST['name']))
    $name = $_POST['name'];
    else{
        $name ="user";
    }
    echo "<h1>$name</h1>";
    ?>  
    </header>
    <section id="side_nav">
        <nav>
            <ul>
                <li>Omar</li>
                <li>Ahmad</li>
                <li>Osama</li>
                <li>Doaa</li>
                <li>Israa</li>
                <li>Ahmad</li>
                
            </ul>
        </nav>
    </section>
    <section id="main">
        <div class="card">
           <img src="images/male.jpg" alt="my_card" class="img">
             <div class="body_card">
                 <h1>Omar</h1>
             </div>
         </div>
         <div class="card">
           <img src="images/male.jpg" alt="my_card" class="img">
             <div class="body_card">
                 <h1>Ahmad</h1>
             </div>
         </div>
         <div class="card">
            <img src="images/male.jpg" alt="my_card" class="img">
             <div class="body_card">
                 <h1>Osama</h1>
             </div>
         </div>
         <div class="card">
            <img src="images/female.jpg" alt="my_card" class="img">
             <div class="body_card">
                 <h1>Doaa</h1>
             </div>
         </div>
         <div class="card">
            <img src="images/female.jpg" alt="my_card" class="img">
             <div class="body_card">
                <h1>Israa</h1>
                 
             </div>
         </div>
         <div class="card">
            <img src="images/male.jpg" alt="my_card" class="img">
             <div class="body_card">
                 <h1>Ahmad</h1>
             </div>
         </div>
         <div class="card">
            <img src="images/male.jpg" alt="my_card" class="img">
             <div class="body_card">
                 <h1>Ahmad</h1>
             </div>
         </div>
         <div class="card">
            <img src="images/male.jpg" alt="my_card" class="img">
             <div class="body_card">
                 <h1>Ahmad</h1>
             </div>
         </div>
         <div class="card">
            <img src="images/male.jpg" alt="my_card" class="img">
             <div class="body_card">
                 <h1>Ahmad</h1>
             </div>
         </div>
    </section>
</body>
</html>