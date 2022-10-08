<template>
    <div>
        <div class="container-fluid form-check">
                <div class="row justify-content-around extCon">
                    <div class="col-12 col-sm-5 shadow p-3 mb-5 bg-white rounded">
                        <label>
                            <input
                                type="radio" 
                                name="category" 
                                id="category1"
                                value="animal documentaries"
                                >
                            <div>
                                Documentaries
                            </div>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5 shadow mb-5 bg-white rounded">
                        <label>
                            <input
                                type="radio" 
                                name="category" 
                                id="category2"
                                value="funny animal videos"
                            >
                            <div>Funny</div>
                        </label> 
                    </div>
                    <button class="button-1" v-on:click="getVideos">Search</button>
                </div> 
        </div>
        <div class="container-fluid">
            <iframe v-for="video in vlist" 
                :key="video.id.videoId" 
                width="400" 
                height="315" 
                :src="'https://www.youtube.com/embed/'+video.id.videoId"  
                allowfullscreen
                >
            </iframe>
        </div>
    </div>
</template>

<script>
    const axios = require("axios");
    export default {
        data() {
            return{
                vlist: [],
                setCategory: "",
                isChecked: false,
            }
        },
        methods:{
            getVideos(){
                this.pickCategory()
                if(!this.isChecked){
                    this.vlist = []
                    axios.request({
                        method: 'GET',
                        url: 'https://www.googleapis.com/youtube/v3/search',
                        params: {
                            part: 'snippet',
                            key: "AIzaSyCUq1SbbgrOTyIoAxq-O9l5eGx6SRHL-n0",
                            q: this.setCategory,
                            maxResults: 4,
                            type: 'video',
                            videoDuration: "short",
                            videoEmbeddable: true,
                        },
                    })
                    .then((response) =>{
                        this.vlist = response.data.items
                    }).catch(function (error) {
                        console.log(error)
                    });
                }
            },
            pickCategory(){
                this.isChecked = false;
                const doc = document.getElementById('category1');
                const fun = document.getElementById('category2');
                if(doc.checked){
                    this.setCategory = doc.value
                }else if(fun.checked){
                    this.setCategory = fun.value
                }else{
                    this.isChecked = true
                }
            }
        }
    }
</script>

<style src="./youtube-video.css"></style>