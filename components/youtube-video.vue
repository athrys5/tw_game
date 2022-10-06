<template>
    <div class="video-container">
        <section class="create-todo">
			<h3>CREATE A TODO</h3>

			<form id="new-todo-form">
				<div class="options">
					<label>
						<input 
							type="radio" 
							id="category1" 
							value="animal documentaries"
						/>
						<span class="bubble business"></span>
						<div>Business</div>
					</label>
					<label>
						<input 
							type="radio" 
							id="category2" 
							value="funny animal videos"
						/>
						<span class="bubble personal"></span>
						<div>Personal</div>
					</label>

				</div>
				<b-button v-on:click="getVideos">codio</b-button>
			</form>
		</section>
        <iframe v-for="video in vlist" 
            :key="video.id.videoId" 
            width="400" 
            height="315" 
            :src="'https://www.youtube.com/embed/'+video.id.videoId"  
            allowfullscreen
            >
        </iframe>
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