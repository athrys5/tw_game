<template>
    <div style="margin-top:90px;">
        <div
            v-for="(el,index) in array"
            :key="index"
        >
            {{JSON.parse(JSON.stringify(el.title))}}
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
                url: '/vetData.json',
            }).then((response) => {
               return response;
            }).then((res)=>{
                this.array = res.data.data;
            })
        }
    }
}
</script>
