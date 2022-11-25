var board = document.getElementById("board");
console.log("hello")

for (var i = 0 ; i < 9; i ++){
    var cells = document.createElement("use");
   
    cells.setAttribute("href", "#board");
    cells.id = `case${i}`;
    cells.innerHTML="";
   
    cells.width="50";
    cells.height="50";
    console.log(cells)

}
