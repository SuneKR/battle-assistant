<template>
    <div id="listContainer"></div>
</template>

<script>
import { ref, computed } from "vue"
import TokenDataService from "../services/tokenDataService"

export default {
    name: 'TokenList',
    data: () => ({}),
    methods:{
        populateList(){
            const listContainer = document.getElementById("listContainer")

            TokenDataService.getAll().then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    const tokenListing = document.createElement("div")
                    const tokenImage = document.createElement("img")
                    tokenImage.src = "http://localhost:5173/tokens/" + response.data[i].tokenimagesource + ".png"
                    tokenListing.appendChild(tokenImage)
                    tokenListing.appendChild(document.createTextNode("id: " + response.data[i].id))
                    tokenListing.appendChild(document.createTextNode("\n"))
                    tokenListing.appendChild(document.createTextNode("X: " + response.data[i].gridx + ", Y: " + response.data[i].gridy))
                    tokenListing.appendChild(document.createTextNode("Size: " + response.data[i].tokensize + ", Selected: " + response.data[i].selected))

                    listContainer.appendChild(tokenListing)
                }        
            })
        }
    },
    mounted(){
        try{
            this.populateList()
        }
        catch(e){
            console.log(e)
        }
    }
}
</script>