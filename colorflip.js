 let btn = document.getElementById("btn");
 const colors=["#5d8aa8","#f0f8ff","#e32636","#a4c639", "#915c83"];
 let myColor = document.getElementById("myColor")
 function getRandomColors(){
   return colors[Math.floor(Math.random()*colors.length)];
 }
   

btn.onclick = function color(){
   let random = getRandomColors();
   document.body.style.backgroundColor = random;
   myColor.textContent= `${random}`
   
    }
  
     
  
    
 
   
 