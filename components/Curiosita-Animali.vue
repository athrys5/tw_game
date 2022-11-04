<template>
    <div class="container-fluid">
        <div class="row justify-content-center curiosity">
            <div class="col-sm-12 col-md-8 card">
                <h1>Did you know?</h1>
                <img class="card-img-top" :src="list.image_link" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{list.name}}</h5>
                    <p class="card-text">
                        The {{list.name}} latin name is: {{list.latin_name}} <br>
                        The {{list.name}} type is: {{list.animal_type}} <br>
                        The {{list.name}} active time is: {{list.active_time}} <br>
                        The {{list.name}} length min is: {{list.length_min}} <br>
                        The {{list.name}} length max is: {{list.length_max}} <br>
                        The {{list.name}} weight min is: {{list.weight_min}} <br>
                        The {{list.name}} weight max is: {{list.weight_max}} <br>
                        The {{list.name}} lifespan is: {{list.lifespan}} <br>
                        The {{list.name}} habitat is: {{list.habitat}} <br>
                        The {{list.name}} diet is: {{list.diet}} <br>
                        The {{list.name}} geo range is: {{list.geo_range}} <br>
                    </p>
                </div> 
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-10 col-md-4">
                <button class="button" @click="getCuriosity">Load another animal</button>
            </div>
        </div>
    </div>
</template>

<script>
    const axios = require("axios");
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
</script>

<style src="./Curiosita-Animali.css"></style>