<template>
    <div class="login">
        <div class="borders" style="margin-top: 90px;">
            <div class="form-group">
                <label for="InputEmail1" lang="en">Email address</label>
                <input  id="InputEmail1" v-model="email" type="email" class="form-control" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="InputPassword1" lang="en">Password</label>
                <input id="InputPassword1" v-model="password" type="password" class="form-control" placeholder="Password">
            </div>
            <button class="subBtn" @click="checkLog">Login</button>
        </div>
        <p  v-show="failLog" class="failLab" lang="en">
            Login Failed
        </p>
    </div>
</template>

<script>

export default {
    data(){
            return{
                email:'',
                password:'',
                failLog: false,
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
                if(d.data.length !== 0 ){
                    this.failLog = false;
                    const em = d.data[0].email;
                    const st = d.data[0].state;
                    const id = d.data[0].userid;
                    fetch('api/score',{
                        method: 'POST',
                        body: JSON.stringify({
                            score: this.$store.getters.getScore,
                            email: em,
                            state: st,
                            user: id,
                        }),
                        headers: {'Content-Type': 'application/json'},
                    }) 
                    this.$router.push('/games')
                } else {
                    this.failLog = true;
                }
            })
        },
    },
    middleware: 'auth'
}
</script>

<style src="./about.css"></style>