const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

//1.1 cara

console.log(Math.PI)
const PI_DOUBLE = 2 * Math.PI
let radius = 100
let posX = 150
let posY = 120

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'



ctx.arc(posX, posY, radius, 0, PI_DOUBLE)
ctx.stroke()
ctx.fill()
ctx.closePath()

//1.2 ojos1

let radius1 = 10
let posX1 = 110
let posY1 = 80

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'



ctx.arc(posX1, posY1, radius1, 0, PI_DOUBLE)
ctx.stroke()
ctx.fill()
ctx.closePath()

//1.2.1 ojo 2

let radius2 = 10
let posX2 = 190
let posY2 = 80

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'



ctx.arc(posX2, posY2, radius2, 0, PI_DOUBLE)
ctx.stroke()
ctx.fill()
ctx.closePath()

//1.3 sonrisa

let radius3 = 50
let posX3 = 150
let posY3 = 120

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'



ctx.arc(posX3, posY3, radius3,0, Math.PI )
ctx.stroke()
ctx.fill()
ctx.closePath()

// 2 cuadrado
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'
ctx.fillRect(50, 300, 200 ,200)


// 2.1 circulo1
let radius21 = 30
let posX21 = 100
let posY21 = 350

ctx.beginPath()
ctx.fillStyle = 'red'
ctx.strokeStyle = 'black'

ctx.arc(posX21, posY21, radius21, 0, PI_DOUBLE)
ctx.stroke()
ctx.fill()
ctx.closePath()

//2.2 circulo2
let radius22 = 30
let posX22 = 199
let posY22 = 350

ctx.beginPath()
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'black'

ctx.arc(posX22, posY22, radius22, 0, PI_DOUBLE)
ctx.stroke()
ctx.fill()
ctx.closePath()

//2.3 circulo3

let radius23 = 30
let posX23 = 199
let posY23 = 450

ctx.beginPath()
ctx.fillStyle = 'purple'
ctx.strokeStyle = 'black'

ctx.arc(posX23, posY23, radius23, 0, PI_DOUBLE)
ctx.stroke()
ctx.fill()
ctx.closePath()

//2.4 circle4
let radius24 = 30
let posX24 = 100
let posY24 = 450

ctx.beginPath()
ctx.fillStyle = 'green'
ctx.strokeStyle = 'black'

ctx.arc(posX24, posY24, radius24, 0, PI_DOUBLE)
ctx.stroke()
ctx.fill()
ctx.closePath()

//3.1 cuadrado con lineas

let posX31=300
let posY31= 300
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'
ctx.fillRect(posX31, posY31, 200 ,200)

//3.2 linea derecha
ctx.beginPath()//pone el lapiz en el cavas
ctx.strokeStyle = 'red'
ctx.moveTo(500, 500)//coordenadas Inicio
ctx.lineTo(400, 400)//coordenadas Final

ctx.stroke()
ctx.closePath()

//3.3 linea izquierda
ctx.beginPath()//pone el lapiz en el cavas
ctx.strokeStyle = 'red'
ctx.moveTo(300, 500)//coordenadas Inicio
ctx.lineTo(400, 400)//coordenadas Final

ctx.stroke()
ctx.closePath()

//3.4 linea top
ctx.beginPath()//pone el lapiz en el cavas
ctx.strokeStyle = 'red'
ctx.moveTo(400, 300)//coordenadas Inicio
ctx.lineTo(400, 400)//coordenadas Final

ctx.stroke()
ctx.closePath()

//4 cuadrado blanco
let posX4=550
let posY4= 300
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'
ctx.fillRect(posX4, posY4, 200 ,200)

//4.1 cuadrado dentro del cuadrado
let posX41=565
let posY41= 315
ctx.fillStyle = 'purple'
ctx.strokeStyle = 'black'
ctx.fillRect(posX41, posY41, 170 ,170)

//4.2 circulo dentro del cuadrado

let radius42 = 30
let posX42 = 649
let posY42 = 400

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'

ctx.arc(posX42, posY42, radius42, 0, PI_DOUBLE)
ctx.stroke()
ctx.fill()
ctx.closePath()





