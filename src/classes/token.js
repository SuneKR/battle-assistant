import canvasTintImage from "canvas-tint-image"
import AsyncPreloader from "async-preloader"
import TokenDataService from "../services/tokenDataService"
//import GridContainer from "../components/GridContainer"

//const canvas = GridContainer.canvas
//const context = GridContainer.context
//const cellSize = GridContainer.cellSize

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
        (async () => {
            console.log(this.tokenImage.src)
            let actualImage = await AsyncPreloader.loadImage(this.tokenImage)
            if(this.selected) {  actualImage = canvasTintImage(actualImage, "#00ff00", 0.5)  }
            //context.drawImage(actualImage, this.gridX*cellSize, (canvas.cellInHeight-(this.gridY+1))*cellSize, this.tokenSize*cellSize, this.tokenSize*cellSize)
            context.drawImage(actualImage, this.gridX*cellSize, (canvas.cellInHeight-(this.gridY+1))*cellSize, this.tokenSize*cellSize, this.tokenSize*cellSize)
        })()
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