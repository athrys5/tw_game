<template>
    <div class="container-fluid" style="margin-top:90px;">
        <div class="row justify-content-center">
          <span class="pagetitle" lang="en">Some useful health information</span>
        </div>
        <div
            v-for="(el,index) in array"
            :key="index"
        >
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title healthtitle" lang="en">{{JSON.parse(JSON.stringify(el.title))}}</h5>
                    <p class="card-text" lang="en">{{JSON.parse(JSON.stringify(el.introduction))}}</p>
                    <div v-if="currentlyShowing === index">
                        <div 
                            v-for="(sub,id) in el.body"
                            v-show="checkClick"
                            :key="id"
                        >
                            <p class="subtitlehealth" lang="en">{{JSON.parse(JSON.stringify(sub.subtitle))}}</p>
                            <p lang="en">{{JSON.parse(JSON.stringify(sub.text))}}</p>
                        </div>
                    </div>
                    <a v-if="currentlyShowing !== index" class="btn buttonhealth" @click="showInfo(index)" role="button">Show More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data(){
        return {
            array: [],
            checkClick: false,
            currentlyShowing: null,
        }
    },
    mounted() {
       this.getVetInfo();
    },
    methods:{
         getVetInfo(){
           axios.request({
                method: 'GET',
                url: '/vetData.json',
            }).then((response) => {
               return response;
            }).then((res)=>{
                this.array = res.data.data;
            })
        },
        showInfo(index){
            this.checkClick = true;
            this.currentlyShowing = index;
        },
    }
}
</script>
<style src="./Animal-Info.css"></style>