<template>
    <input type="range" id="cellSizeSlider" min="25" max="150" value="75" class="slider" @mouseup=" update()">
    <br>
    <canvas id="board" style="border: 2px solid"></canvas>
</template>
  
<script>
import AsyncPreloader from "async-preloader"
import Token from "../classes/token"
import TokenDataService from "../services/tokenDataService"

export default {
    name: 'battleMap',
    data: () => ({}),
    methods:{
        drawGrid(){
            const canvas = document.getElementById("board")
            const context = canvas.getContext("2d")
            const cellSize = parseInt(document.getElementById("cellSizeSlider").value)
                       
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
        },
        drawTokens(){
            const canvas = document.getElementById("board")
            const context = canvas.getContext("2d")
            const cellSize = parseInt(document.getElementById("cellSizeSlider").value)
            
            TokenDataService.getAll().then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    new Token(response.data[i].tokenimagesource,response.data[i].gridx,response.data[i].gridy,response.data[i].tokensize,response.data[i].id,response.data[i].selected).draw(canvas, context, cellSize)
                }
            })
        },
        mouseClick(event){
            const canvas = document.getElementById("board")
            const context = canvas.getContext("2d")
            const cellSize = parseInt(document.getElementById("cellSizeSlider").value)
            const multiSelect = false

            const currentX = Math.floor((event.clientX-canvas.getBoundingClientRect().left)/cellSize)
            const currentY = Math.floor((canvas.height-event.clientY+canvas.getBoundingClientRect().top)/cellSize)


            TokenDataService.getAll().then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    if((response.data[i].gridx <= currentX) && (currentX < (response.data[i].gridx+response.data[i].tokensize)) && (currentY <= response.data[i].gridy) && ((response.data[i].gridy-response.data[i].tokensize) < currentY)) {
                        if(response.data[i].selected) {
                            const updatedData = {
                                id: response.data[i].id,
                                tokenimagesource: response.data[i].tokenimagesource,
                                gridx: response.data[i].gridx,
                                gridy: response.data[i].gridy,
                                tokensize:response.data[i].tokensize,
                                selected: false
                            }
                            TokenDataService.update(response.data[i].id, updatedData)
                        }
                        else {
                            const updatedData = {
                                id: response.data[i].id,
                                tokenimagesource: response.data[i].tokenimagesource,
                                gridx: response.data[i].gridx,
                                gridy: response.data[i].gridy,
                                tokensize:response.data[i].tokensize,
                                selected: true
                            }
                            TokenDataService.update(response.data[i].id, updatedData)
                        }
                    }
                    else if(event.key != "Shift") {
                        const updatedData = {
                            id: response.data[i].id,
                            tokenimagesource: response.data[i].tokenimagesource,
                            gridx: response.data[i].gridx,
                            gridy: response.data[i].gridy,
                            tokensize:response.data[i].tokensize,
                            selected: false
                        }
                        TokenDataService.update(response.data[i].id, updatedData)
                    }
                }
            }).then(() => this.update())

        },
        clearBoard(){
            const canvas = document.getElementById("board")
            const context = canvas.getContext("2d")
            context.clearRect(0, 0, canvas.width, canvas.height)
        },
        setupBoard(){
            this.drawGrid()
            this.drawTokens()
        },
        update(){
            this.clearBoard()
            this.drawGrid()
            this.drawTokens()
        }
    },
    mounted(){ 
        this.setupBoard()
        addEventListener('resize', (event) => {  location.reload()  })
        addEventListener('click', (event) => {  this.mouseClick(event)  })
    }
}
</script>