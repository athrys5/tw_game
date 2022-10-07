<template>
    <div>
        <h1>Did you know?</h1>
        <b-card :img-src="list.image_link" img-alt="Card image" img-bottom>
            <b-card-text>
                The {{list.name}} latin name is {{list.latin_name}} 
                The {{list.name}} type is {{list.animal_type}} 
                The {{list.name}} active time is {{list.active_time}} 
                The {{list.name}} length min is {{list.length_min}} 
                The {{list.name}} length max is {{list.length_max}} 
                The {{list.name}} weight min is {{list.weight_min}}
                The {{list.name}} weight max is {{list.weight_max}}
                The {{list.name}} lifespan is {{list.lifespan}}
                The {{list.name}} habitat is {{list.habitat}}
                The {{list.name}} diet is {{list.diet}}
                The {{list.name}} geo range is {{list.geo_range}}
            </b-card-text>
        </b-card>
        <b-button @click="getCuriosity">Carica un altro animale</b-button>
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
        },
        mounted() {
            this.getCuriosity();
        }
    }
</script>
