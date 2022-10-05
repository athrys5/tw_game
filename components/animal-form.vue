<template>
    <div class="app"> 
        <section class="create-todo">
            <h4>DESCRIBE YOUR ANIMAL</h4>
            <form id="new-todo-form" @submit.prevent="additem">
                <input 
                    type="text" 
                    name="AnimalName" 
                    id="content" 
                    placeholder="e.g. make a video"
                    v-model="inputAnimalName" />
                <input 
                    type="text" 
                    name="AnimalType" 
                    id="content" 
                    placeholder="e.g. make a video"
                    v-model="inputAnimalType" />
                <input 
                    type="text" 
                    name="AnimalRace" 
                    id="content" 
                    placeholder="e.g. make a video"
                    v-model="inputAnimalRace" />
                <input 
                    type="text" 
                    name="AnimalAge" 
                    id="content" 
                    placeholder="e.g. make a video"
                    v-model="inputAnimalAge" />
                <input type="submit" value="Add item"/>
            </form>
        </section>
        <section class="todo-list">
            <h3>I TUOI ANIMALI</h3>
            <div class="todo" id="todo-list">
                <div v-for="item in itemsAsc" :key=item-item>
                    <div class="todo-content">
                        <b-card
                            :header=item.AnimalName
                            header-text-variant="white"
                            header-tag="header"
                            header-bg-variant="dark"
                            style="max-width: 20rem;"
                        >
                            <input type="text" v-model="item.AnimalType"/>
                            <input type="text" v-model="item.AnimalRace"/>
                            <input type="text" v-model="item.AnimalAge"/>
                            <b-button variant="primary" @click="removeitem(item)">Delete</b-button>
                        </b-card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch, computed } from 'vue'
    const items = ref([])
    const inputAnimalName = ref('')
    const inputAnimalType = ref('')
    const inputAnimalRace = ref('')
    const inputAnimalAge = ref('')
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

    