<template>
    <div class="app">
        <div class="row justify-content-center">
          <span class="pagetitle" lang="en">Try our Quiz!</span>
        </div>
        <section v-if="!quizfinished" class="quiz">
            <div class="quiz-info">
                <span class="question" lang="en">Which is {{animalforquiz.name}} {{question}} ?</span>
            </div>
            <div class="options">
                <label 
                    v-for="(item, index) in repliesize" 
                    :id="answerId(index)" 
                    :key="index"
                    class="option"
                    lang="en"
                    @click="selectAnswer(index)"
                >
                    <input 
                        v-model="control"
                        type="radio" 
                        name="some-radios"
                        :value=item
                    />
                    {{item}}
                </label>
            <button  v-if="submitbutton" class="quizbtn" :disabled="!control" @click="checkAnswer">Submit</button>
            <button  v-if="!submitbutton" class="quizbtn"  @click="getCuriosity" >{{labelbutton}}</button>
            </div>
        </section>
        <section v-else class="showscore">
            <h2 lang="en">You have finished the quiz!</h2>
            <p lang="en">Your score is {{score}}</p>
            <button class="quizbtn" @click="repeatQuiz">Repeat the Quiz</button>
            <button class="quizbtn" @click="saveScore">Save Score</button>
        </section>
        <div class="row justify-content-center" style="display:flex; flex-wrap:wrap;">
            <ads-card />
            <ads-card />
            <ads-card />
            <ads-card />
            <ads-card />
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    const axios = require("axios");
    export default {
        data(){
            return{
                control: false,
                answer: " ",
                answered: false,
                submitbutton: true, 
                score: 0,
                labelbutton: "Next Question",
                incorrect: false,
                quizfinished: false,
                selectedIndex: null,
                list: [],
                correctIndex: null,
                repliesize: [],
                fieldsforquiz: [],
                animalforquiz: [],
                listoffields: ["taxonomy","characteristics"],
                listoftax: ["genus","scientific_name"],
                listofchar: ["lifestyle","color","lifespan", "group"],
                listofcommonnames: ["dog", "cat" , "lion", "snake" , "cow" , "horse" , "shark" , "tiger" , "monkey" , "spider" , "bee"],
                randcomm: 0,
                randfield: 0,
                randomtax: 0,
                randomchar: 0,
                question: '',
            }
        },
        mounted() {
            this.getCuriosity();
        },
        methods:{
            getCuriosity(){
                 if(this.incorrect){
                    this.quizfinished = true;
                    this.answered = false;
                    this.incorrect = false;
                } else {
                    this.labelbutton= "Next Question";
                    this.answered = false;
                    this.submitbutton = true;
                    this.selectedIndex = null;
                    this.correctIndex = null;
                    this.animalforquiz = [];
                    this.answer = " ";
                    this.fieldsforquiz = [];
                    this.repliesize = [];
                    this.randcomm = Math.floor(Math.random()*(10-0+1))+0;
                    this.randfield = Math.floor(Math.random()*(1-0+1))+0;
                    this.list = [];
                    axios.request({
                        method: 'GET',
                        url: 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals',
                        params: {name: this.listofcommonnames[this.randcomm]},
                        headers: {
                            'X-RapidAPI-Key': '97de72016bmsh3c696ec6f435aecp1dae0cjsnfa3791727184',
                            'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
                        }
                    })
                    .then( (response) => {
                        const random = Math.floor(Math.random() * response.data.length)
                        this.list = response.data;
                        this.animalforquiz = response.data[random];
                        this.prepareQuiz();
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            },
            prepareQuiz() {
                const par = this.list;
                if(this.listoffields[this.randfield] === "taxonomy") {
                    this.randomtax = Math.floor(Math.random()*(1-0+1))+0;
                    if(this.animalforquiz[this.listoffields[this.randfield]][this.listoftax[this.randomtax]] === undefined)
                        this.getCuriosity();
                    this.fieldsforquiz.push(this.animalforquiz[this.listoffields[this.randfield]][this.listoftax[this.randomtax]]);
                    this.question = this.listoftax[this.randomtax];
                    for(let i=0; i<this.list.length; i++){
                        if(this.animalforquiz[this.listoffields[this.randfield]][this.listoftax[this.randomtax]]!== par[i][this.listoffields[this.randfield]][this.listoftax[this.randomtax]]){
                            this.fieldsforquiz.push(par[i][this.listoffields[this.randfield]][this.listoftax[this.randomtax]]);
                        }
                    }
                } else {
                    this.randomchar = Math.floor(Math.random()*(3-0+1))+0;
                    if(this.animalforquiz[this.listoffields[this.randfield]][this.listofchar[this.randomchar]] === undefined)
                        this.getCuriosity();
                    this.fieldsforquiz.push(this.animalforquiz[this.listoffields[this.randfield]][this.listofchar[this.randomchar]]);
                    this.question = this.listofchar[this.randomchar];
                    for(let i=0; i<this.list.length; i++){
                        if(this.animalforquiz[this.listoffields[this.randfield]][this.listofchar[this.randomchar]]!== par[i][this.listoffields[this.randfield]][this.listofchar[this.randomchar]]){
                            this.fieldsforquiz.push(par[i][this.listoffields[this.randfield]][this.listofchar[this.randomchar]]);
                        }
                    }
                }
                // console.log(this.fieldsforquiz);
                if(this.fieldsforquiz.length <3)
                    this.getCuriosity();
                const prova = [...new Set(this.fieldsforquiz)];
                this.fieldsforquiz = Array.from(prova);
                this.repliesize.push(this.fieldsforquiz[0]);
                let count = 0;
                let j = 1;
                while(count !== 2){
                    if(this.fieldsforquiz[j] !== undefined) {
                        this.repliesize.push(this.fieldsforquiz[j]);
                        count = count +1;
                    }
                    j = j +1;
                }
                this.repliesize.sort(function(){return 0.5 - Math.random()});
                this.correctIndex = this.repliesize.findIndex(this.findCorrectIndex);
            },
            findCorrectIndex(field){
                if(this.listoffields[this.randfield] === "taxonomy") {
                    return field === this.animalforquiz[this.listoffields[this.randfield]][this.listoftax[this.randomtax]];
                } else {
                    return field === this.animalforquiz[this.listoffields[this.randfield]][this.listofchar[this.randomchar]];
                }
            },
            answerId(index){
                let answerClass = "";
                if(!this.answered && this.selectedIndex === index){
                    answerClass = 'selected';
                }else if(this.answered && this.correctIndex === index){
                    answerClass = "correct";
                }else if(this.selectedIndex === index && this.correctIndex !== index){
                    answerClass = "incorrect";
                }
                return answerClass;
            },
            selectAnswer(index){
                this.selectedIndex = index;
            },
            checkAnswer(){
                this.submitbutton = false;
                this.checkquestions = this.checkquestions + 1;
                this.control = false;
                this.answered = true;
                if(this.selectedIndex === this.correctIndex){
                    this.score = this.score + 1;
                } else {
                    this.incorrect = true;
                    this.labelbutton = "Show Results";
                }
            },
            repeatQuiz(){
                this.quizfinished = false;
                this.score = 0;
                this.selectedIndex = null;
                this.getCuriosity();
            },
            saveScore(){
                this.changeScore(this.score);
                this.changeComeFromGame(true)
                this.$router.push('/about');
            },
            ...mapMutations({
                changeScore: 'changeScore',
                changeComeFromGame: 'changeComeFromGame'
            }),
        },
    }
</script>
<style src="./Animal-Game.css"></style>