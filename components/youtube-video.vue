<template>
    <div class="video-container">
        <b-button @click="getVideos">cerca</b-button>
        <div>
            <p v-for="item in vlist" :key="item.id">
                {{item.snippet.title}}
            </p>
        </div>
    </div>
</template>

<!-- <script setup>
const API_KEY = "AIzaSyD2vaibQ0DVyEdo8x0_aCv-tUYsNzARdFU";
const maxResults = 20;
const search = "Funny animal video";

fetch("https://youtube.googleapis.com/youtube/v3/search?key="+ API_KEY +"&videoDuration=short&type=video&part=snippet&maxResults="+ maxResults +"&q="+search)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    const videos = data.items;
    const videocontainer = document.querySelector(".video-container");
    for(const video of videos){
        videocontainer.innerHTML += `<iframe width="420" height="315" src="http://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>`;
    }
})
</script> -->

<script>
    const axios = require("axios");
    export default {
        data() {
            return{
                vlist: [],
            }
        },
        methods:{
            getVideos(){
                this.vlist = []
                axios.request({
                    method: 'GET',
                    url: 'https://www.googleapis.com/youtube/v3/search',
                    params: {
                        part: 'snippet',
                        key: "AIzaSyD2vaibQ0DVyEdo8x0_aCv-tUYsNzARdFU",
                        q: "funnyvideos",
                        maxResults: 5,
                        type: 'video'
                    },
                })
                .then((response) =>{
                    this.vlist = response.data.items
                    console.log(this.vlist)
                }).catch(function (error) {
                    console.log(error)
                });
            },
        }
    }
</script>