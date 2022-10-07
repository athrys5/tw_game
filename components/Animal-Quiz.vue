<template>
    <div>
        <b-form-group  :label="'Which is '+ animalforquiz.name + ' ' + listofparameters[rand]" v-slot="{ ariaDescribedby }">
            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A"></b-form-radio>
        </b-form-group>
    </div>
</template>

<script>
    const axios = require("axios");
    export default {
        data(){
            return{
                rand: 0,
                list: [],
                animalforquiz: [],
                listofparameters: ["latin_name", "length_min", "length_max", "weight_min", "weight_max", "lifespan", "habitat", "diet", "geo_range"],
            }
        },
        methods:{
            getCuriosity(){
                this.list = [];
                axios.request({
                    method: 'GET',
                    url: 'https://zoo-animal-api.herokuapp.com/animals/rand/10',
                })
                .then( (response) => {
                    this.list = response.data;
                    this.animalforquiz = this.list[0];
                }).catch(function (error) {
                    console.log(error)
                });
            },
        },
        mounted() {
            this.rand = Math.floor(Math.random()*(8-0+1))+0;
            this.getCuriosity();
        }
    }
</script>
