<template>
    <div class="container-fluid curiositycontainer">
        <div class="row justify-content-center">
          <span class="pagetitle" lang="en">Did You Know?</span>
        </div>
        <div class="row justify-content-center"> 
            <p class="labelInputComName" lang="en">Please insert an animal's common name</p>
        </div>
        <div class="row justify-content-center">
            <input v-model="commoname" type="text" class="inputComName">
        </div>
        <div v-if="list != undefined" class="row justify-content-center">
            <div class="col-sm-12 col-md-8 col-lg-6 card curiositycard">
                <!-- <img class="card-img-top" :src="list.image_link" alt="Card image cap"> -->
                <div class="card-body">
                    <h3 class="card-title" lang="en">THE {{list.name}}'S</h3>
                    <div class="card-text">
                        <h4 lang="eg">Taxonomy</h4>
                        <p v-for="(ta,index) in list.taxonomy" :key=index lang="en">{{index}}: {{ta}}</p>
                        <h4>Characteristics</h4>
                        <p v-for="(cha,index) in list.characteristics" :key=index lang="en">{{index}}: {{cha}}</p>
                        <h4>Locations</h4>
                        <p v-for="(loc,index) in list.locations" :key=index lang="en">{{loc}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="list == undefined" class="row justify-content-center"> 
            <p class="labelNotValid" lang="en">Name not valid</p>
        </div>
        <div class="row justify-content-center">
          <button class="btnCuriosity" @click="getCuriosity" lang="en">Load another animal</button>
        </div>
    </div>
</template>

<script>
   /* const axios = require("axios");
    export default {
        data(){
            return{
                list: [],
            }
        },
        mounted() {
            this.getCuriosity();
        },
        methods:{
            getCuriosity(){
               axios.request({
                    method: 'GET',
                    url: 'https://zoo-animal-api.herokuapp.com/animals/rand/',
                })
                .then( (response) => {
                    this.list = response.data;
                }).catch(function (error) {
                    console.log(error)
                });
            },
        }
    }
    */
   const axios = require("axios");

   export default {
    data(){
        return{
            list: [],
            commoname: '',
        }
    },
    mounted() {
        this.commoname = 'dog';
        this.getCuriosity();
    },
    methods:{
        getCuriosity(){
            axios.request({
                method: 'GET',
                url: 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals',
                params: {name: this.commoname},
                headers: {
                    'X-RapidAPI-Key': '97de72016bmsh3c696ec6f435aecp1dae0cjsnfa3791727184',
                    'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
                }
            })
            .then( (response) => {
                const random = Math.floor(Math.random() * response.data.length)
                this.list = response.data[random];
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
   }

</script>

<style src="./Curiosita-Animali.css"></style>
