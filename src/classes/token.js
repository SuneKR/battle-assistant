import canvasTintImage from "canvas-tint-image"
import AsyncPreloader from "async-preloader"
import TokenDataService from "../services/tokenDataService"

class Token{
    //constructor(imageSource, gridX = (Math.floor(Math.random()*canvas.cellInWidth)-1), gridY = (Math.floor(Math.random()*canvas.cellInHeight)-1), tokenSize = 1, id, selected){
    constructor(imageSource, gridX, gridY, tokenSize = 1, id, selected){
        this.tokenImage = new Image()
        this.tokenImage.src = "http://localhost:5173/tokens/" + imageSource + ".png" 
        this.gridX = gridX
        this.gridY = gridY
        this.tokenSize = tokenSize
        this.selected = selected
        this.id = id
    }

    draw(canvas, context, cellSize){
        //let actualImage = new Image()
        (async () => {
            //let currentImage = this.tokenImage
            //if(this.selected) {  currentImage = canvasTintImage(currentImage, "#00ff00", 0.5)  }
            const actualImage = await AsyncPreloader.loadImage(this.tokenImage)
            if(this.selected) {  context.drawImage(canvasTintImage(actualImage, "#00ff00", 0.5), this.gridX*cellSize, (canvas.cellInHeight-(this.gridY+1))*cellSize, this.tokenSize*cellSize, this.tokenSize*cellSize)  }
            else {  context.drawImage(actualImage, this.gridX*cellSize, (canvas.cellInHeight-(this.gridY+1))*cellSize, this.tokenSize*cellSize, this.tokenSize*cellSize)  }
            //context.drawImage(actualImage, this.gridX*cellSize, (canvas.cellInHeight-(this.gridY+1))*cellSize, this.tokenSize*cellSize, this.tokenSize*cellSize)
        })()
        //context.drawImage(actualImage, this.gridX*cellSize, (canvas.cellInHeight-(this.gridY+1))*cellSize, this.tokenSize*cellSize, this.tokenSize*cellSize)
    }

    /*
    select(){
        this.selected = true
        console.log(this.id)
        TokenDataService.update(this.id, response.data).then(response => {
            response.data.selected = true
            console.log(response.data)
        })
    }
    */
}

export default Token