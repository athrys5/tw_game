<template>
    <div class="app">
        <section v-if="!quizfinished" class="quiz">
            <div class="quiz-info">
                <span class="question">Which is {{animalforquiz.name}} {{listofparameters2[randparam]}} ?</span>
            </div>
            <div class="options">
                <label 
                    v-for="(item, index) in repliesize" 
                    :id="answerId(index)" 
                    :key="index"
                    class="option"
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
            <!--<p>{{animalforquiz[listofparameters[randparam]]}}</p>-->  
            <button v-if="submitbutton" :disabled="!control" @click="checkAnswer" class="quizbtn">Submit</button>
            <button v-if="!submitbutton" @click="getCuriosity" class="quizbtn">{{labelbutton}}</button>
            </div>
       </section>
       <section v-else class="showscore">
			<h2>You have finished the quiz!</h2>
			<p>Your score is {{score}}</p>
            <button @click="repeatQuiz" class="quizbtn">Repeat the Quiz</button>
		</section>
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
                answered: false,
                submitbutton: true, 
                score: 0,
                labelbutton: "Next Question",
                incorrect: false,
                quizfinished: false,
                selectedIndex: null,
                correctIndex: null,
                list: [],
                control: false,
                animalforquiz: [],
                fieldsforquiz: [],
                repliesize: [],
                listofparameters: ["latin_name", "length_min", "length_max", "weight_min", "weight_max", "lifespan", "habitat", "diet", "geo_range"],
                listofparameters2: ["latin name", "minimum length (in meters)", "maximum length (in meters)", "minimum weight (in kilos)", "maximum weight (in kilos)", "lifespan", "habitat", "diet", "geo range"],
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
                }
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
                    this.correctIndex = this.repliesize.findIndex(this.findCorrectIndex);
                }
            },
            repeatQuiz(){
                this.quizfinished = false;
                this.score = 0;
                this.selectedIndex = null;
                this.getCuriosity();
            },
            selectAnswer(index){
                this.selectedIndex = index;
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
            findCorrectIndex(field){
                return field === this.animalforquiz[this.listofparameters[this.randparam]];
            }
        }
    }
</script>

<style src="./Animal-Quiz.css"></style>
