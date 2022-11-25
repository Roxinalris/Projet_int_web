var board = document.getElementById("board");
var page = document.getElementById("page");
console.log("hello")

for (var i = 0 ; i < 1; i ++){

    var cells = document.createElement("use");

    cells.setAttribute("href", "#board");    
    cells.setAttribute("width", "50");  
    cells.setAttribute("height" , "50");
    cells.setAttribute("transform", "translate(0  0)");      

    cells.id = `case${i}`;
    cells.innerHTML="";
    page.appendChild(cells);
    console.log(cells);
  

}

console.log("oui")
document.querySelectorAll("use[href='#board']").forEach(element => {       
                
    element.addEventListener("click", e => {
        console.log("e id : " , e.target.attributes.id)

        
    })
}) 
function tick(e){
    

}