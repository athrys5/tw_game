<template>
    <div class="container-fluid app"> 
        <div class="row justify-content-center">
            <span class="pagetitle">Describe your Pets</span>
            <div class="subpetdiv col-12 col-md-6">
                <form id="new-todo-form" @submit.prevent="additem">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <input 
                                type="text" 
                                name="AnimalName" 
                                id="content" 
                                placeholder="Name"
                                v-model="inputAnimalName" />
                        </div>
                        <div class="col-12">
                        <input 
                            type="text" 
                            name="AnimalType" 
                            id="content1" 
                            placeholder="Type"
                            v-model="inputAnimalType" />
                        </div>
                        <div class="col-12">
                            <input 
                                type="text" 
                                name="AnimalRace" 
                                id="content2" 
                                placeholder="Breed"
                                v-model="inputAnimalRace" />
                        </div>
                        <div class="col-12">
                            <input 
                                type="text" 
                                name="AnimalAge" 
                                id="content3" 
                                placeholder="Age"
                                v-model="inputAnimalAge" />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btnNavbar h4" value="Add item">Add Pet</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-4 col-sm-6 content-card" v-for="item in itemsAsc" :key=item.id>
                <div class="card-big-shadow">
                    <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                        <div class="content">
                            <h4 class="petname">{{item.AnimalName}}</h4>
                            <p class="description"><b>Type </b>{{item.AnimalType}} </p>
                            <p class="description"><b>Breed </b>{{item.AnimalRace}} </p>
                            <p class="description"><b>Age </b>{{item.AnimalAge}} </p>             
                            <b-button variant="primary" @click="removeitem(item)">Delete</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch, computed } from 'vue'
    const items = ref([])
    const inputAnimalName = ref()
    const inputAnimalType = ref()
    const inputAnimalRace = ref()
    const inputAnimalAge = ref()
    const itemsAsc = computed(() => items.value.slice(0).sort((a,b) =>{
	    return a.createdAt - b.createdAt
    })) 
    watch(items, (newVal) => {
        localStorage.setItem('items', JSON.stringify(newVal))
    }, {
        deep: true
    })
    const additem = () => {
        if (inputAnimalName.value.trim() === '') {
            return
        }
        items.value.push({
            AnimalName: inputAnimalName.value,
            AnimalType: inputAnimalType.value,
            AnimalRace: inputAnimalRace.value,
            AnimalAge: inputAnimalAge.value,
            editable: false,
        })
    }
    const removeitem = (item) => {
        items.value = items.value.filter((t) => t !== item)
    }
    onMounted(() => {
        items.value = JSON.parse(localStorage.getItem('items')) || []
    })
</script>

<style src="./animal-form.css"></style>