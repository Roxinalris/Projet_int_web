
window.addEventListener("load",start);


function start(){
    const win = document.getElementById("theWinner");
    
    var monSVG = document.createElementNS("http://www.w3.org/2000/svg",'svg');

  
    monSVG.width ='800px';
    monSVG.height = '800px';
    monSVG.viewBox = "0 0 800 800";
    monSVG.setAttribute("id", "Elsvg");
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
    
    monSVG.appendChild(groupeCercle);

    var groupecar = document.createElementNS("http://www.w3.org/2000/svg",'g');
    groupecar.setAttribute('id','cr9');
    monSVG.appendChild(groupecar);

    



    // for qui affiche la grille de départ 
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

    // regarde quelle case est cliquée pour pouvoir placer un rond ou une croix 

    var turn = 0;

    document.querySelectorAll("use[href='#car']").forEach(element => {       
                
        element.addEventListener("click", e => {
            
            var x = e.target.attributes.id.value;
            if(whoTurn(turn) == 1){

                croix(x);
                isWhin(turn);

            }else if (whoTurn(turn) == 0){

                cercle(x);
                isWhin(turn);
 
            }

            //console.log("posit : ", posiT);
           turn = turn + 1 ;
            
        })
    
            
    })
  
  


   
    var posiT  = [];
    for(var i = 0; i < 9; i++){
        posiT[i] = 0;
    }
    //place une croix a l'emplacement x 
    function croix(x){
        posiT[x] = 2; 
        var croix = document.createElementNS("http://www.w3.org/2000/svg", 'use');
        croix.setAttribute('href','#cross');
        croix.setAttribute('width', 50);
        croix.setAttribute('height', 50);
        croix.setAttribute('id', x);
        //croix.setAttribute 
        croix.setAttribute('transform', `translate(${posi[x]})`)
     
        groupeCroix.appendChild(croix);
        
        
    }
    //place un cercle a l'emplacement x 
    function cercle(x){
        posiT[x] = 1;
        var cercle = document.createElementNS("http://www.w3.org/2000/svg", 'use');
        cercle.setAttribute('href','#cir');
        cercle.setAttribute('width', 50);
        cercle.setAttribute('height', 50);
        cercle.setAttribute('id', x);
        cercle.setAttribute('transform', `translate(${posi[x]})`)
        groupeCercle.appendChild(cercle);
    
         
    }

    function carr(x){
        var carrer = document.createElementNS("http://www.w3.org/2000/svg", 'use');
        carrer.setAttribute('href', '#car');
        carrer.setAttribute('width', 50);
        carrer.setAttribute('height', 50);
        carrer.setAttribute('transform', `translate(${posi[x]})`)
        groupecar.appendChild(carrer);

    }
    function isWhin(turn){
        var elWinnor = posiT[0];
        var posiel  = 0 ;
        var pos2;
        var pos3;
   
        if(elWinnor == posiT[posiel+1] && elWinnor == posiT[posiel+2]){
            pos2 = posiel+1;
            pos3 = posiel+2;            
            itsWin(elWinnor, posiel, pos2, pos3);
        }
        if(elWinnor == posiT[posiel+3] && elWinnor == posiT[posiel+6]){
            pos2 = posiel+3;
            pos3 = posiel+6;
            itsWin(elWinnor, posiel, pos2, pos3);
        }
        if(elWinnor == posiT[posiel+4] && elWinnor == posiT[posiel+8]){
            pos2 = posiel+4;
            pos3 = posiel+8;
            itsWin(elWinnor, posiel, pos2, pos3);
        }
    
        elWinnor = posiT[1];
        var posiel  = 1; 
    
        if(elWinnor == posiT[posiel+3] && elWinnor == posiT[posiel+6]){
            pos2 = posiel+3;
            pos3 = posiel+6;
            itsWin(elWinnor, posiel, pos2, pos3);
        } 
        // if(elWinnor == posiT[posiel+1] && elWinnor == posiT[posiel+2]){
        //     pos2 = posiel+1;
        //     pos3 = posiel+2;
        //     itsWin(elWinnor, posiel, pos2, pos3);
        // }
    
        elWinnor = posiT[2];
        var posiel  = 2;
    
        if(elWinnor == posiT[posiel+2] && elWinnor == posiT[posiel+4]){
            pos2 = posiel+2;
            pos3 = posiel+4;
            itsWin(elWinnor, posiel, pos2, pos3);
        }
        if(elWinnor == posiT[posiel+3] && elWinnor == posiT[posiel+6]){
            pos2 = posiel+3;
            pos3 = posiel+6;
            itsWin(elWinnor, posiel, pos2, pos3);
        }
    
        elWinnor = posiT[3];
        var posiel  = 3;
       
        if(elWinnor == posiT[posiel+1] && elWinnor == posiT[posiel+2]){
            pos2 = posiel+1;
            pos3 = posiel+2;
            itsWin(elWinnor, posiel, pos2, pos3);
        }
    
        elWinnor = posiT[6];
        var posiel  = 6;
    
        if(elWinnor == posiT[posiel+1] && elWinnor == posiT[posiel+2]){
            pos2 = posiel+1;
            pos3 = posiel+2;
            itsWin(elWinnor, posiel, pos2, pos3);
        }
    
        //regarde si il y a match null
        if (turn == 8){
           
            win.innerText = "Match nul";
         
            
        }
    
    }
    function itsWin(elWinnor, posiel, pos2, pos3){
        if(elWinnor == 2){
            win.innerText = "Les croix gagnent ";
            for(var i = 0; i < 9; i++){
                if (i ==  posiel || i == pos2 || i == pos3){
    
                }else {
                    carr(i);

                }
                
                
                
                
            }
           
        }else if(elWinnor == 1){
            win.innerText = "Les ronds gagnent";
            for(var i = 0; i < 9; i++){
                if (i ==  posiel || i == pos2 || i == pos3){
    
                }else {
                    carr(i);
                }
                
                
                
            }
          
        }
        
       
    }

}
// var wc = 0;
// var wcr = 0;
function restart(){
    var monInput = document.getElementById('Elsvg');
    monInput.parentNode.removeChild(monInput);
   
    // if (document.getElementById("theWinner").innerText == "Les ronds gagnent"){
    //     document.getElementById("circle").innerText = wc + 1;
    // }else if(document.getElementById("theWinner").innerText == "Les croix gagnent"){
    //     document.getElementById("cross").innerText = wcr + 1;
    // }
    document.getElementById("theWinner").innerText = " ";


    start();
}


function whoTurn(turn){
    return turn % 2;
}




 