<template>
    <div>
      Welcome to our website
      <form-animale />
      <div>{{name}}</div>
      <div>{{animal}}</div>
      <div>{{race}}</div>
      <div>{{age}}</div>
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
    mounted() {
      this.name = localStorage.getItem('name');
      this.animal = localStorage.getItem('animal');
      this.race = localStorage.getItem('race');
      this.age = localStorage.getItem('age');
    },
  }
  </script>