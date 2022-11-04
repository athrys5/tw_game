<template>
    <div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="selected">
                    <option v-for="item in alist" :key=item.id :value="item.AnimalName">{{item.AnimalName}}</option>
                </select>
        </div>
        <div>
            <button v-on:click="getApi">search</button>
        </div>
        <div>
            <div class="card shadow-lg" style="width: 100%;" v-for="animal in list" :key=animal.id>
                <div class="card-body">
                    <h5 class="card-title">{{animal.name}}</h5>
                    <div class="card-text">
                        <h4>Taxonomy:</h4><br>
                        <b><u>Kingdom:</u></b>{{animal.taxonomy.kingdom}} <br>
                        <b><u>Phylum:</u></b>{{animal.taxonomy.phylum}} <br>
                        <b><u>Class:</u></b>{{animal.taxonomy.class}} <br>
                        <b><u>Order:</u></b>{{animal.taxonomy.order}} <br>
                        <b><u>Family:</u></b>{{animal.taxonomy.family}} <br>
                        <b><u>Genus:</u></b>{{animal.taxonomy.genus}} <br>
                        <b><u>Scientific Name:</u></b>{{animal.taxonomy.scientific_name}}
                    </div>
                    <div class="card-text">
                        <h4>Characteristichs</h4> 
                        <b><u>Prey:</u></b>{{animal.characteristics.prey}} <br>
                        <b><u>Name of young:</u></b>{{animal.characteristics.name_of_young}} <br>
                        <b><u>Group behavior:</u></b>{{animal.characteristics.group_behavior}} <br>
                        <b><u>Estimated population size:</u></b>{{animal.characteristics.estimated_population_size}} <br>
                        <b><u>Biggest threat:</u></b>{{animal.characteristics.biggest_threat}} <br>
                        <b><u>Distinctive feature:</u></b>{{animal.characteristics.distinctive_feature}} <br>
                        <b><u>Gestation period:</u></b>{{animal.characteristics.gestation_period}} <br>
                        <b><u>Habitat:</u></b>{{animal.characteristics.habitat}} <br>
                        <b><u>Diet:</u></b>{{animal.characteristics.diet}} <br>
                        <b><u>Avarage litter size:</u></b>{{animal.characteristics.avarage_litter_size}} <br>
                        <b><u>Common name:</u></b>{{animal.characteristics.common_name}} <br>
                        <b><u>Number of species:</u></b>{{animal.characteristics.number_of_species}} <br>
                        <b><u>Lifestyle:</u></b>{{animal.characteristics.lifestyle}} <br>
                        <b><u>Slogan:</u></b>{{animal.characteristics.slogan}} <br>
                        <b><u>Group:</u></b>{{animal.characteristics.group}} <br>
                        <b><u>Color:</u></b>{{animal.characteristics.color}} <br>
                        <b><u>Skin type:</u></b>{{animal.characteristics.skin_type}} <br>
                        <b><u>Top speed:</u></b>{{animal.characteristics.top_speed}} <br>
                        <b><u>Life span:</u></b>{{animal.characteristics.lifespan}} <br>
                        <b><u>Weight:</u></b>{{animal.characteristics.weight}} <br>
                        <b><u>Height:</u></b>{{animal.characteristics.height}} <br>
                    </div>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default{
    data(){
        return{
            alist: [],
            list: [],
            selected: "",
            qrace: "",
        }
    },
    mounted(){
        this.alist = JSON.parse(localStorage.getItem('items'));
    },
    methods:{
        getApi(){
            this.getRace();
            axios.request({
                method: 'GET',
                url: 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals',
                params: {name: this.qrace},
                headers: {
                    'X-RapidAPI-Key': '97de72016bmsh3c696ec6f435aecp1dae0cjsnfa3791727184',
                    'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
                }
            })
            .then( (response) => {
                this.list = response.data;
            }).catch(function (error) {
                console.log(error)
            });
        },
        getRace(){
            const i = this.alist;
            for(let j = 0; j < i.length; j++){
                if(i[j].AnimalName === this.selected){
                    this.qrace = i[j].AnimalRace;
                }
            }
        }
    }
}
</script>

<style src="./my-curiosity.css"></style>