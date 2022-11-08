<template>
    <div class="container-fluid curiositycontainer">
        <div class="row justify-content-center">
          <span class="pagetitle">Did You Know?</span>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-8 col-lg-6 card curiositycard">
                <img class="card-img-top" :src="list.image_link" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">The {{list.name}}'S</h5>
                    <p class="card-text">
                        <b>Latin name is:</b> {{list.latin_name}} <br>
                        <b>Type is:</b> {{list.animal_type}} <br>
                        <b>Active time is:</b> {{list.active_time}} <br>
                        <b>Length min is:</b> {{list.length_min}} <br>
                        <b>Length max is:</b> {{list.length_max}} <br>
                        <b>Weight min is:</b> {{list.weight_min}} <br>
                        <b>Weight max is:</b> {{list.weight_max}} <br>
                        <b>Lifespan is:</b> {{list.lifespan}} <br>
                        <b>Habitat is:</b> {{list.habitat}} <br>
                        <b>Diet is:</b> {{list.diet}} <br>
                        <b>Geo range is:</b> {{list.geo_range}} <br>
                    </p>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
          <button class="btnCuriosity" @click="getCuriosity">Load another animal</button>
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
