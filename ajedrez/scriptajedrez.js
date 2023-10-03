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





