<template>
    <div>
        <div>
        <div class="card">
            <p class="label">On Sale</p>
            <img class="card-img-top" width="200" height="250" :src="array.img" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{array.name}}</h5>
                <div class="card-text text">
                    <p class="price">{{array.price}} $</p>
                    <p class="sale">{{array.sale}} $</p>
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
                const random = Math.floor(Math.random() * (maxlen - 0 + 1)) + 0;
                this.array = res.data.data[random];
            })
        }
    }
}
</script>

<style src="./ads-card.css"></style>