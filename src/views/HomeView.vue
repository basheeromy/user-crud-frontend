<template>
  <div class="container" v-if="users">
    <user
      v-for="(user, i) in users"
      :key="i"
      :user="user"
    />
  </div>
  <div v-else class="container">
    {{ loading ? "Loading..." : "There are no users to show!" }}
  </div>
</template>

<script>
// @ is an alias to /src
import user from '@/components/user-component.vue';
import axios from 'axios';

export default {
  name: 'HomeView',
  data(){
    return {
      users: null,
      loading: false
    }
  },
  components: {
    user
  },
  mounted(){
    this.loading = true;
    axios.get('http://192.168.1.7:8085/users')
    .then((res)=>{
      if(res.data.length){
        this.users = res.data
      }
    }).finally(()=> this.loading = false)
  }

}
</script>

<style lang="scss">
  .container {
    width: 400px;
    margin: 0 auto;
  }
</style>
