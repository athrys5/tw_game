<template>
    <div class="container-fluid mycuriosity">
      <div class="row justify-content-center">
        <span class="pagetitle" lang="en">Curiosities about your Pets</span>
      </div>
      <div class="row justify-content-center" style="margin-bottom: 2rem;">
        <select id="select" v-model="selected" class="form-control petDropdown" aria-label="Select one of the inserted animals">
            <option v-for="item in alist" :key=item.id :value="item.AnimalName">{{item.AnimalName}}</option>
        </select>
        <b-icon-search class="search" @click="getApi"></b-icon-search>
      </div>
      <div class="row justify-content-center">
          <div v-for="animal in list" :key=animal.id class="card shadow-lg col-12 col-md-6 col-lg-4 infocard" style="width: 100%;">
              <div class="card-body">
                  <h5 class="card-title">{{animal.name}}</h5>
                  <div class="card-text" lang="en">
                      <h4>Taxonomy:</h4>
                      <b>Kingdom: </b>{{animal.taxonomy.kingdom}} <br>
                      <b>Phylum: </b>{{animal.taxonomy.phylum}} <br>
                      <b>Class: </b>{{animal.taxonomy.class}} <br>
                      <b>Order: </b>{{animal.taxonomy.order}} <br>
                      <b>Family: </b>{{animal.taxonomy.family}} <br>
                      <b>Genus: </b>{{animal.taxonomy.genus}} <br>
                      <b>Scientific Name: </b>{{animal.taxonomy.scientific_name}}
                      <h4>Characteristics</h4>
                      <b>Prey: </b>{{animal.characteristics.prey}} <br>
                      <b>Name of young: </b>{{animal.characteristics.name_of_young}} <br>
                      <b>Group behavior: </b>{{animal.characteristics.group_behavior}} <br>
                      <b>Estimated population size: </b>{{animal.characteristics.estimated_population_size}} <br>
                      <b>Biggest threat: </b>{{animal.characteristics.biggest_threat}} <br>
                      <b>Distinctive feature: </b>{{animal.characteristics.distinctive_feature}} <br>
                      <b>Gestation period: </b>{{animal.characteristics.gestation_period}} <br>
                      <b>Habitat :</b>{{animal.characteristics.habitat}} <br>
                      <b>Diet: </b>{{animal.characteristics.diet}} <br>
                      <b>Avarage litter size: </b>{{animal.characteristics.avarage_litter_size}} <br>
                      <b>Common name: </b>{{animal.characteristics.common_name}} <br>
                      <b>Number of species: </b>{{animal.characteristics.number_of_species}} <br>
                      <b>Lifestyle: </b>{{animal.characteristics.lifestyle}} <br>
                      <b>Slogan: </b>{{animal.characteristics.slogan}} <br>
                      <b>Group: </b>{{animal.characteristics.group}} <br>
                      <b>Color: </b>{{animal.characteristics.color}} <br>
                      <b>Skin type: </b>{{animal.characteristics.skin_type}} <br>
                      <b>Top speed: </b>{{animal.characteristics.top_speed}} <br>
                      <b>Life span: </b>{{animal.characteristics.lifespan}} <br>
                      <b>Weight: </b>{{animal.characteristics.weight}} <br>
                      <b>Height: </b>{{animal.characteristics.height}} <br>
                  </div>
              </div>
        </div>
      </div>
      <div v-if="!click" class="row justify-content-center" style="display:flex; flex-wrap:wrap;">
        <ads-card />
        <ads-card />
        <ads-card />
        <ads-card />
        <ads-card />
      </div>
    </div>
</template>

<script>
import { BIconSearch } from 'bootstrap-vue'

const axios = require('axios');
export default{
    components: {BIconSearch},
    data(){
        return{
            alist: [],
            list: [],
            selected: "",
            qrace: "",
            click: false,
        }
    },
    mounted(){
        this.alist = JSON.parse(localStorage.getItem('items'));
    },
    methods:{
        getApi(){
            this.click = true;
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
