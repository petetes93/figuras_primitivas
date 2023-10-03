console.log('holaa');
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight


//1 tablero
ctx.fillStyle = 'brown'
ctx.strokeStyle = 'black'
let posX11 = 10 
let posY11 = 10
ctx.fillRect(posX11, posY11, 500 ,500)
ctx.strokeRect(posX11, posY11, 500 ,500)



ctx.fillStyle = 'black'
ctx.strokeStyle = 'brown'
let posX12 = 10 
let posY12 = 10
ctx.fillRect(posX12, posY12, 50 ,50)

ctx.fillStyle = 'white'
let posX13 = 60
let posY13 = 10
ctx.fillRect(posX13, posY13, 50 ,50) 

for (let i = 0; i < 8; i++) {
    ctx.fillStyle = 'black'
    ctx.strokeStyle = 'brown'
    let posX12 = 10 
    let posY12 = 10
    ctx.fillRect(posX12, posY12, 50 ,50) 
    
}

for (let j = 0; j < 8; j++) {
    ctx.fillStyle = 'white'
let posX13 = 60
let posY13 = 10
ctx.fillRect(posX13, posY13, 50 ,50) 
    
}



function tableroAje(position) {
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            if (tableroAje % 2 == 0) {
                ctx.fillStyle = 'white'
            } else {
                ctx.fillStyle = 'black'
            }
            
        }
        
    }
}

function Rework() {
const casillaTam = canvas.width/8
    for (let i = 0; i < 8; i++) {


        for (let j = 0; j < 8; j++) {

            if ((i+j) % 2 ===0) {
                ctx.fillStyle = 'white'

            } else {
                   ctx.fillStyle = 'black'

               }  
             
        }
        ctx.fillRect(casillaTam * i, casillaTam * j, casillaTam, casillaTam)
    }
}

Rework()




//const tableroCount = 64
/*
for(i=0;i<8;i++){
    if(i%2===0){
        let linea1='';
        for(j=0;j<8;j++){
          if(j%2===0){
            linea1+='B'
        }
          else linea1+='N'
        }
        console.log(linea1)
    }
    else {let linea2='';
    for(k=0;k<8;k++){
      if(k%2===0){
        linea2+='N'
    }
      else linea2+='B'
    }
    console.log(linea2)
  }
}


// Tamaño de cada casilla
const casillaSize = canvas.width / 8;

// Colores para las casillas
const coloresCasillas = ['#ffffff', '#000000'];

// Dibuja el tablero de ajedrez
for (let fila = 0; fila < 8; fila++) {
    for (let columna = 0; columna < 8; columna++) {
        const colorIndex = (fila + columna) % 2;
        const x = columna * casillaSize;
        const y = fila * casillaSize;

        ctx.fillStyle = coloresCasillas[colorIndex];
        ctx.fillRect(x, y, casillaSize, casillaSize);
    }
}
*/
