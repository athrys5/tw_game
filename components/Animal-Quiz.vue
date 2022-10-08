<template>
    <div class="app">
        <section class="quiz">
            <div class="quiz-info">
                <span class="question">Which is {{animalforquiz.name}} {{listofparameters2[randparam]}}</span>
                <span class="score" :v-model="score">Score {{score}}/</span>
            </div>
            <div class="options">
                <label v-for="item in repliesize" :key="item.index" class="option">
                      <input 
						type="radio" 
						name="some-radios" 
						:value=item
						v-model="control"
					/>
                    {{item}}
                </label>
            <p>{{animalforquiz[listofparameters[randparam]]}}</p>
            <button v-on:click="checkAnswer" :disabled="!control">Verifica</button>
            </div>
       </section>
    </div>
</template>

<style src="./Animal-Quiz.css"></style>

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
                control: false,
                animalforquiz: [],
                fieldsforquiz: [],
                repliesize: [],
                listofparameters: ["latin_name", "length_min", "length_max", "weight_min", "weight_max", "lifespan", "habitat", "diet", "geo_range"],
                listofparameters2: ["latin name", "minimum length (in meters)", "maximum length (in meters)", "minimum weight (in kilos)", "maximum weight (in kilos)", "lifespan", "habitat", "diet", "geo range"],
            }
        },
        methods:{
            getCuriosity(){
                this.list = [];
                this.animalforquiz = [];
                this.fieldsforquiz = [];
                this.repliesize = [];
                this.answer = " ";
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
                    this.prepareQuiz();
                }).catch(function (error) {
                    console.log(error);
                });
            },
            checkAnswer(){
                this.control = false;
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
                this.getCuriosity();
            },
            prepareQuiz(){
                this.fieldsforquiz.push(this.animalforquiz[this.listofparameters[this.randparam]]);
                const par = this.list;
                for(let i=0; i<this.list.length; i++){
                    if(this.animalforquiz[this.listofparameters[this.randparam]]!== par[i][this.listofparameters[this.randparam]]){
                        this.fieldsforquiz.push(par[i][this.listofparameters[this.randparam]]);
                    }
                }
                if(this.fieldsforquiz.length <3){
                    this.getCuriosity();
                }else{
                    const prova = [...new Set(this.fieldsforquiz)];
                    this.fieldsforquiz = Array.from(prova);
                    this.repliesize.push(this.fieldsforquiz[0]);
                    for(let j=1; j<3; j++){
                        this.repliesize.push(this.fieldsforquiz[j]);
                    }
                    this.repliesize.sort(function(){return 0.5 - Math.random()});
                }
            },
        },
        mounted() {
            this.getCuriosity();
        }
    }
</script>