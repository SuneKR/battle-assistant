<template>
    <canvas id="board" style="border: 2px solid"></canvas>
</template>
  
<script>
export default {
    name: 'battleMap',
    data: () => ({}),
    methods:{
        func(){
            const canvas = document.getElementById("board")
            const context = canvas.getContext("2d")
            const cellSize = 75

            canvas.cellInWidth = Math.floor(window.innerWidth / cellSize)
            canvas.width = canvas.cellInWidth * cellSize
            canvas.cellInHeight = Math.floor(window.innerHeight / cellSize)
            canvas.height = canvas.cellInHeight * cellSize

            canvas.style.marginLeft = "auto"
            canvas.style.marginRight = "auto"
            canvas.style.display = "block"

            for (let x = 0; x <= canvas.width; x += cellSize) {
                context.moveTo(x,0)
                context.lineTo(x,canvas.height)
            }   
            for (let y = 0; y < canvas.height; y += cellSize) {
                context.moveTo(0,y)
                context.lineTo(canvas.width,y)
            }

            context.fillStyle='#00ff6a'
            context.fillRect(0,0,canvas.width,canvas.height)
                
            context.strokeStyle ="black"
            context.stroke()
        }
    },
    mounted(){ 
        this.func()
        addEventListener('resize', (event) => {  location.reload()  })
    }
    
}

/*
const canvas = document.getElementById("board")
const context = canvas.getContext("2d")
const cellSize = 75

canvas.cellInWidth = Math.floor(window.innerWidth / cellSize)
canvas.width = canvas.cellInWidth * cellSize
canvas.cellInHeight = Math.floor(window.innerHeight / cellSize)
canvas.height = canvas.cellInHeight * cellSize

//document.getElementById("board").style.marginLeft = "auto"
//document.getElementById("board").style.marginRight = "auto"
canvas.style.marginLeft = "auto"
canvas.style.marginRight = "auto"
canvas.style.display = "block"

for (let x = 0; x <= canvas.width; x += cellSize) {
    context.moveTo(x,0)
    context.lineTo(x,canvas.height)
}
for (let y = 0; y < canvas.height; y += cellSize) {
    context.moveTo(0,y)
    context.lineTo(canvas.width,y)
}

context.fillStyle='#00ff6a'
context.fillRect(0,0,canvas.width,canvas.height)
    
context.strokeStyle ="black"
context.stroke()
*/
</script>