<template>
    <div>
        <div>
        <div class="card adscard">
            <p class="label adslabel" lang="en">On Sale</p>
            <img class="card-img-top" width="200" height="250" :src="array.img" alt="Card Image about product advertisement">
            <div class="card-body adsb">
                <h5 class="card-title">{{array.name}}</h5>
                <div class="card-text adst">
                    <p class="adsprice">{{array.price}} $</p>
                    <p class="adssale">{{array.sale}} $</p>
                </div>
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
        }
    },
    mounted() {
       this.getVetInfo();
    },
    methods:{
         getVetInfo(){
           axios.request({
                method: 'GET',
                url: '/ads.json',
            }).then((response) => {
               return response;
            }).then((res)=>{
                const maxlen = res.data.data.length;
                const random = Math.floor(Math.random() * maxlen);
                this.array = res.data.data[random];
            })
        }
    }
}
</script>

<style src="./ads-card.css"></style>