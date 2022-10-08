<template>
    <div>
        <div class="container-fluid col-10 firstContainer">
            <div class="row justify-content-center extCon">
                <div class="col-12 col-sm-6 form-check">
                    <label class="shadow-lg">
                        <input
                            type="radio" 
                            name="category" 
                            id="category1"
                            value="animal documentaries"
                            >
                        <span class="bubble business"></span>
                        <div class="catTitles">
                            <h4 class="CustomCat">Documentaries</h4>
                        </div>
                    </label>
                </div>
            </div>
            <div class="row justify-content-center extCon2">
                <div class="col-12 col-sm-6 form-check">
                    <label class="shadow-lg">
                        <input
                            type="radio" 
                            name="category" 
                            id="category2"
                            value="funny animal videos"
                        >
                        <span class="bubble personal"></span>
                        <div class="catTitles">
                            <h4 class="CustomCat text-wrap">Funny</h4>
                        </div>
                    </label> 
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-sm-6 formButton">
                    <button class="button-1 shadow-lg" v-on:click="getVideos">Search</button>
                </div>
            </div>
        </div>
        <div class="container-fluid col-12 col-sm-8 col-lg-6">
            <div class="row card cardCustom shadow-sm" v-for="video in vlist" :key="video.id.videoId" >
                <iframe
                    class = "videoSize"
                    frameBorder="0"
                    :src="'https://www.youtube.com/embed/'+video.id.videoId"  
                    allowfullscreen
                    >
                </iframe>
                <div class="card-body">
                    <h5 class="card-title text-left">{{video.snippet.title}}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
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