<template>
  <div class="container">
    <form @submit.prevent="createNewUser">
        <input type="text" v-model="name" placeholder="Name">
        <input type="text" v-model="age" placeholder="Age">
        <button type="submit">
            {{ loading ? 'Loading...' : 'Submit' }}
        </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            name: "",
            age: "",
            loading: false
        }
    },
    methods: {
        createNewUser(){
            if(this.loading) return;
            this.loading = true;
            axios.post('http://192.168.1.7:8085/create-user',{
                name: this.name,
                age: this.age
            }).then((res)=>{
                if(res.data.status === 200){
                    window.alert("The new user has been created")
                } else throw new Error("Something went wrong!")
            }).catch((e)=>{
                window.alert("There has been some issues while parsing this request. Please try again later!");
                console.log(e.message)
            }).finally(()=> this.loading = false)
        }
    }
}
</script>

<style lang="scss">
    .container {
        width: 400px;
        margin: 0 auto;
        form {
            display: flex;
            flex-wrap: wrap;
            input[type=text] {
                width: 100%;
                height: 40px;
                border-radius: 10px;
                border: 1px solid #ebebeb;
                box-shadow: 0 0 10px -5px #999999;
                margin: 10px;
                padding: 0 15px;
                line-height: 40px;
            }
            button[type=submit]{
                width: 300px;
                margin: 10px auto 0;
                display: block;
                height: 40px;
                color: white;
                background: #42b983;
                border: none;
                border-radius: 10px;
                font-size: 21px;
                font-weight: bold;
                text-transform: uppercase;
                cursor: pointer;
                &:hover{
                    background: #2db477;
                }
            }
        }
    }
</style>
