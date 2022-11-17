<template>
    <div>
        <div v-if="!this.$store.getters.getIsLogged" style="margin-top: 90px;">
            <nuxt-link to="/">Home</nuxt-link>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input  id="exampleInputEmail1" v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input id="exampleInputPassword1" v-model="password" type="password" class="form-control" placeholder="Password">
            </div>
            <button @click="checkLog">Submit</button>
        </div>
        <div v-if="this.$store.getters.getIsLogged" style="margin-top: 90px;">
            <button @click="changeIsLogged()">LogOut</button>
        </div>
</div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    data(){
            return{
                email:'',
                password:'',
            }
    },
    methods: {
        async checkLog(){
            await fetch('api/about',{
                method: 'POST',
                body: JSON.stringify({
                    pw: this.password,
                    email: this.email,
                }),
                headers: {'Content-Type': 'application/json'},
            }).then((res)=>{
                return res.json();
            }).then((d)=>{
                const em = d.data[0].email;
                const st = d.data[0].state;
                const id = d.data[0].userid;
                if(d.data.length !== 0 ){
                    this.changeIsLogged();
                    this.changeEmail(em);
                    this.changeUserId(id);
                    this.changeState(st);
                }
            })
        },
        ...mapMutations({
            changeIsLogged: 'changeIsLogged',
            changeEmail: 'changeEmail',
            changeUserId: 'changeUserId',
            changeState: 'changeState'
        }), 
    },
}
</script>