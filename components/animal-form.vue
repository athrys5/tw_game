<template>
    <div class="container-fluid pagecontainer">
      <div class="row justify-content-center">
        <span class="pagetitle">Describe your Pets</span>
      </div>
      <div class="row justify-content-center">
        <div class="subpetdiv col-12 col-md-6">
            <form id="new-todo-form" ref={clearForm} @submit.prevent="additem">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <input
                            id="content"
                            v-model="inputAnimalName"
                            type="text"
                            name="AnimalName"
                            placeholder="Name" />
                    </div>
                    <div class="col-12">
                    <input
                        id="content1"
                        v-model="inputAnimalType"
                        type="text"
                        name="AnimalType"
                        placeholder="Type" />
                    </div>
                    <div class="col-12">
                        <input
                            id="content2"
                            v-model="inputAnimalRace"
                            type="text"
                            name="AnimalRace"
                            placeholder="Breed" />
                    </div>
                    <div class="col-12">
                        <input
                            id="content3"
                            v-model="inputAnimalAge"
                            type="number"
                            name="AnimalAge"
                            placeholder="Age" />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btnNavbar h4" value="Add item">Add Pet</button>
                    </div>
                    <div class="col-12">
                      <small class="form-text text-muted">
                        Be accurate describing your friend to find out curiosities!
                      </small>
                    </div>
                </div>
            </form>
          </div>
        </div>
        <div class="row justify-content-center">
          <div v-for="item in itemsAsc" :key=item.id class="col-10 col-sm-8 col-md-4 col-lg-3 content-card">
              <div class="card-big-shadow">
                  <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                      <div class="content">
                          <h4 class="petname">{{item.AnimalName}}</h4>
                          <p class="description"><b>Type </b>{{item.AnimalType}} </p>
                          <p class="description"><b>Breed </b>{{item.AnimalRace}} </p>
                          <p class="description"><b>Age </b>{{item.AnimalAge}} </p>
                          <BIconTrashFill class="delbtn" @click="removeitem(item)"/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch, computed } from 'vue'
    import { BIconTrashFill } from 'bootstrap-vue'

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

