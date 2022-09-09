<template>
  <div class="outer-box">
    <form v-if="edit">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Age">
        <button type="submit">
            {{ loading ? 'Loading...' : 'Submit' }}
        </button>
    </form>
    <div class="box" v-else-if="user"> 
      <div class="name">
          {{ user.name }}
      </div>
      <div class="age">
          {{ user.age }}
      </div>
      <span class="edit-bt" @click="edit = true" v-if="editable">Edit</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      edit: false
    }
  },
  props: [
      'user',
      'editable'
  ]
}
</script>

<style lang="scss">
  .outer-box {
    width: 400px;
    margin: 0 auto;
    .box{
      display: flex;
      justify-content: space-between;
      padding: 10px;
      box-shadow: 0 0 10px #ccc;
      margin: 20px;
      border-radius: 7px;
      .edit-bt{
        color: white;
        background: #2c3e50;
        padding: 5px 12px;
        border-radius: 7px;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
      }
    }
    form {
            display: flex;
            box-shadow: 0 0 10px -5px #999999;
            border: 1px solid #ebebeb;
            border-radius: 5px;
            overflow: hidden;
            width: 400px;
            input[type=text] {
                height: 40px;
                border-radius: 0;
                margin: 0;
                padding: 0 15px;
                line-height: 40px;
                border: 0;
                width: 40%;
            }
            button[type=submit]{
                padding: 0 10px;
                border: 0;
                display: block;
                height: 40px;
                color: white;
                background: #42b983;
                border: none;
                border-radius: 0;
                font-size: 12px;
                font-weight: bold;
                text-transform: uppercase;
                width: 20%;
                cursor: pointer;
                &:hover{
                    background: #2db477;
                }
            }
        }
  }
</style>
