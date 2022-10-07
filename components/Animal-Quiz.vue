<template>
    <div>
        <b-form-group  :label="'Which is '+ animalforquiz.name + ' ' + listofparameters2[randparam]" v-slot="{ ariaDescribedby }">
            <b-form-radio v-for="item in repliesize" :key="item.index" :aria-describedby="ariaDescribedby" name="some-radios" :value=item>{{item}}</b-form-radio>
        </b-form-group>
       <p>{{animalforquiz[listofparameters[randparam]]}}</p>
       <button v-on:click="checkAnswer">Verifica</button>
       <p :v-model="score">{{score}}</p>
    </div>
</template>

<script>

    const axios = require("axios");
    export default {
        data(){
            return{
                randparam: 0,
                randanimal: 0,
                answer: " ",
                score: 0,
                list: [],
                animalforquiz: [],
                fieldsforquiz: [],
                repliesize: [],
                listofparameters: ["latin_name", "length_min", "length_max", "weight_min", "weight_max", "lifespan", "habitat", "diet", "geo_range"],
                listofparameters2: ["latin name", "minimum length (in meters)", "maximum length (in meters)", "minimum weight (in kilos)", "maximum weight (in kilos)", "lifespan", "habitat", "diet", "geo range"],
            }
        },
        methods:{
            getCuriosity(){
                this.randparam = Math.floor(Math.random()*(8-0+1))+0;
                this.randanimal= Math.floor(Math.random()*(9-0+1))+0;
                this.list = [];
                axios.request({
                    method: 'GET',
                    url: 'https://zoo-animal-api.herokuapp.com/animals/rand/10',
                })
                .then( (response) => {
                    this.list = response.data;
                    this.animalforquiz = this.list[this.randanimal];
                    this.fieldsforquiz.push(this.animalforquiz[this.listofparameters[this.randparam]]);
                    const par = this.list;
                    for(let i=0; i<this.list.length; i++){
                        if(this.animalforquiz[this.listofparameters[this.randparam]]!== par[i][this.listofparameters[this.randparam]]){
                            this.fieldsforquiz.push(par[i][this.listofparameters[this.randparam]]);
                        }
                    }
                    const prova = [...new Set(this.fieldsforquiz)];
                    this.fieldsforquiz = Array.from(prova);
                    this.repliesize.push(this.fieldsforquiz[0]);
                    for(let j=1; j<3; j++){
                        this.repliesize.push(this.fieldsforquiz[j]);
                    }
                    this.repliesize.sort(function(){return 0.5 - Math.random()});
                }).catch(function (error) {
                    console.log(error);
                });
            },
            checkAnswer(){ // disabilita bottone dopo primo click 
                const radio = document.getElementsByName('some-radios');
                for(let i=0; i<radio.length; i++){
                    if(radio[i].checked){
                        this.answer = radio[i].value;
                    }
                }
                if(this.answer === this.animalforquiz[this.listofparameters[this.randparam]]){
                    console.log("corretto");
                    this.score = this.score + 1;
                }else {
                    console.log("errato");
                }
            },
        },
        mounted() {
            this.getCuriosity();
        }
    }
</script>
