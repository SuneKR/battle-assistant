<template>
     <img id="futureToken" class="center" @click=" takePicture()"/> 
</template>

<script>
import { Camera, CameraResultType } from '@capacitor/camera'



export default {
    name: 'TokenCamera',
    data: () => ({}),
    methods: {
        async takePicture() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.DataUrl
            })
            const cameraImage = document.getElementById("futureToken")
            cameraImage.src = image.dataUrl
            console.log("Picture taken")
        }
    },
    mounted(){
        const cameraImage = document.getElementById("futureToken")
        cameraImage.src = "http://localhost:5173/tokens/3.png"
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
</style>


