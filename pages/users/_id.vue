<template>
  <section class="container">
    <div>
      <p class="userImg"><img :src="'https://github.com/' + user.login + '.png'" :alt="user.name" /></p>
      <p class="userName">{{user.name}}</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData ({ params }) {
    let {data:user} = await axios.get('https://api.github.com/users/' + params.id);
    console.log(user)
    return {user};
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /*flex-direction: column;*/
  /*
  .userImg{
    border-radius: 50%;
  }
  */
}
.userImg img{
  width: 100%;
  border-radius: 50%;
}
</style>
