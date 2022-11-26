
window.addEventListener("load",start);

function start(){
    var monSVG = document.createElementNS("http://www.w3.org/2000/svg",'svg');

  
    monSVG.width ='800px';
    monSVG.height = '800px';
    monSVG.viewBox = "0 0 800 800";
    monSVG.getAttribute("viewBox", "0 0 800 800");

    console.log(monSVG.width);
    console.log(monSVG);
    

    var conteneur = document.getElementById("body");
    conteneur.appendChild(monSVG);

    //-----symbol permet de déterminé des forme plus ou moins complexe afin des les utilisés comme des objets

    var monSymbole = document.createElementNS("http://www.w3.org/2000/svg", 'symbol');
    monSymbole.setAttribute('id', 'car');
    monSVG.appendChild(monSymbole);


    var myCross = document.createElementNS("http://www.w3.org/2000/svg", 'symbol');
  
    myCross.setAttribute('id', 'cross');
    monSVG.appendChild(myCross)

    var myCircle = document.createElementNS("http://www.w3.org/2000/svg", 'symbol');
    myCircle.setAttribute('id', 'cir');
    monSVG.appendChild(myCircle);


   //----------------- tous ce qui est contenue dans les symbols ----------------

    var square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    
    square.setAttribute('x' , 0);
    square.setAttribute('y', 0);
    square.setAttribute('width', 50);
    square.setAttribute('height', 50);
    square.setAttribute('stroke','black');   
    square.setAttribute('stroke-width',5);

    square.setAttribute('fill', 'white')
    monSymbole.appendChild(square);

    var fontSquare = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    fontSquare.setAttribute('x' , 0);
    fontSquare.setAttribute('y', 0);
    fontSquare.setAttribute('width', 50);
    fontSquare.setAttribute('height', 50);
    fontSquare.setAttribute('stroke','black');   
    fontSquare.setAttribute('stroke-width',2);

    myCross.appendChild(fontSquare);

    var fontSquareCircle = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

    fontSquareCircle.setAttribute('x' , 0);
    fontSquareCircle.setAttribute('y', 0);
    fontSquareCircle.setAttribute('width', 50);
    fontSquareCircle.setAttribute('height', 50);
    fontSquareCircle.setAttribute('stroke','black');   
    fontSquareCircle.setAttribute('stroke-width',2);
    myCircle.appendChild(fontSquareCircle);
    

    var cross1 = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    cross1.setAttribute('x1', '10px');
    cross1.setAttribute('y1', '10px');    
    cross1.setAttribute('x2', '40px');   
    cross1.setAttribute('y2', '40px');
    cross1.setAttribute('stroke','#BB3333');
    cross1.setAttribute('stroke-width',15);
    cross1.setAttribute('stroke-linecap','round');
    myCross.appendChild(cross1);

    var cross2 = document.createElementNS("http://www.w3.org/2000/svg", 'line');

    cross2.setAttribute('x1', '10px');
    cross2.setAttribute('y1', '40px');    
    cross2.setAttribute('x2', '40px');   
    cross2.setAttribute('y2', '10px');
    cross2.setAttribute('stroke','#BB3333');
    cross2.setAttribute('stroke-width', 15);
    cross2.setAttribute('stroke-linecap','round');
    myCross.appendChild(cross2);

    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute('cx', '25px');
    circle.setAttribute('cy', '25px');
    circle.setAttribute('r', '16px');
    circle.setAttribute('stroke','Green');
    circle.setAttribute('stroke-width', 10);
    myCircle.appendChild(circle);
    

    //les groupes permettent de grouper par paquet les formes afin de les manipuler 

    var monGroupe = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    monGroupe.setAttribute('id', 'page');
 

    monSVG.appendChild(monGroupe);

    var groupeCroix = document.createElementNS("http://www.w3.org/2000/svg", 'g'); 
    groupeCroix.setAttribute('id', 'cr7');


    monSVG.appendChild(groupeCroix);

    var groupeCercle = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    groupeCercle.setAttribute('id', 'cr8');
    
    monSVG.appendChild(groupeCercle)

// for affiche la grille de départ 
   let posi = ["0 0", "50 0", "100 0","0 50", "50 50", "100 50","0 100", "50 100", "100 100"];


    for (var i = 0; i < 9 ; i++){
        var uses = document.createElementNS("http://www.w3.org/2000/svg", 'use');

        uses.setAttribute('href','#car');   
        uses.setAttribute('width', 50);
        uses.setAttribute('height', 50);
        uses.setAttribute('id', `${i}`);
        uses.setAttribute('transform', `translate(${posi[i]})`)

        monGroupe.appendChild(uses);
    }

// regarde quelle case est cliquer  pour pouvoir placer un rond ou une croix 
    var turn = 0;
    document.querySelectorAll("use[href='#car']").forEach(element => {       
                
        element.addEventListener("click", e => {
            turn = turn + 1 ;
            var x = e.target.attributes.id.value;
            if(whoTurn(turn) == 1){
                
                console.log("croix : " , x)
                croix(x);
            }else if (whoTurn(turn) == 0){
                cercle(x);
                console.log("rond : " , x)
            }
            
    
            
        })
    })
    //place une croix a l'emplacement x 
    function croix(x){
        var croix = document.createElementNS("http://www.w3.org/2000/svg", 'use');
        croix.setAttribute('href','#cross');
        croix.setAttribute('width', 50);
        croix.setAttribute('height', 50);
        croix.setAttribute('transform', `translate(${posi[x]})`)
        console.log("posi : ", posi[x])
        groupeCroix.appendChild(croix);
    }
    //place un cercle a l'emplacement x 
    function cercle(x){
        var cercle = document.createElementNS("http://www.w3.org/2000/svg", 'use');
        cercle.setAttribute('href','#cir');
        cercle.setAttribute('width', 50);
        cercle.setAttribute('height', 100);
        cercle.setAttribute('transform', `translate(${posi[x]})`)
        groupeCercle.appendChild(cercle);
    }


}

function whoTurn(turn){
    return turn % 2 ;
}




 