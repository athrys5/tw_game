<template>
    <div>
        <label>Nome:</label>
        <input type="text" required v-model="name" />
        <label>Animale:</label>
        <input type="text" required v-model="animal" />
        <label>Razza:</label>
        <input type="text" required v-model="race" />
        <label>Età:</label>
        <input type="text" required v-model="age" />
        <div class="submit">
            <button @click="sendForm">Iscriviti!</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
                animal: '',
                race: '',
                age: '',
            }
        },
        methods: {
            sendForm() {
                localStorage.setItem('name',this.name)
                localStorage.setItem('animal',this.animal)
                localStorage.setItem('race',this.race)
                localStorage.setItem('age',this.age)
            }
        },
    }
</script>