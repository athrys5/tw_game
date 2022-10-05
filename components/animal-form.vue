<template>
    <div class="app"> 
        <section class="create-todo">
            <h4>DESCRIBE YOUR ANIMAL</h4>
            <form id="new-todo-form" @submit.prevent="addTodo">
                <h4>What's on your todo list?</h4>
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
                <input type="submit" value="Add todo"/>
            </form>
        </section>
        <section class="todo-list">
            <h3>I TUOI ANIMALI</h3>
            <div class="list" id="todo-list">
                <div v-for="todo in todosAsc" :key=todo-item>
                    <div class="todo-content">
                        <b-card
                            :header=todo.AnimalName
                            header-text-variant="white"
                            header-tag="header"
                            header-bg-variant="dark"
                            style="max-width: 20rem;"
                        >
                            <input type="text" v-model="todo.AnimalType"/>
                            <input type="text" v-model="todo.AnimalRace"/>
                            <input type="text" v-model="todo.AnimalAge"/>
                            <b-button variant="primary" @click="removeTodo(todo)">Delete</b-button>
                        </b-card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch, computed } from 'vue'
    const todos = ref([])
    const inputAnimalName = ref('')
    const inputAnimalType = ref('')
    const inputAnimalRace = ref('')
    const inputAnimalAge = ref('')
    const todosAsc = computed(() => todos.value.slice(0).sort((a,b) =>{
	    return a.createdAt - b.createdAt
    })) 
    watch(todos, (newVal) => {
        localStorage.setItem('todos', JSON.stringify(newVal))
    }, {
        deep: true
    })
    const addTodo = () => {
        if (inputAnimalName.value.trim() === '') {
            return
        }
        todos.value.push({
            AnimalName: inputAnimalName.value,
            AnimalType: inputAnimalType.value,
            AnimalRace: inputAnimalRace.value,
            AnimalAge: inputAnimalAge.value,
            editable: false,
        })
    }
    const removeTodo = (todo) => {
        todos.value = todos.value.filter((t) => t !== todo)
    }
    onMounted(() => {
        todos.value = JSON.parse(localStorage.getItem('todos')) || []
    })
</script>

<style src="./animal-form.css"></style>

    