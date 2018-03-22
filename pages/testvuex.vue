<template>
  <section class="container">
    <div>
      <app-logo/>
      <p>{{testvuex.counter}}</p>
      <p @click="changeCounter(5)">click!!</p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    AppLogo
  },
  computed: {
    ...mapState([
      "testvuex"
    ])
  },
  methods: {
    // Vuexのactionsを展開
    ...mapActions ({
      changeCounter: 'testvuex/changeCounter',
      resetCounter : 'testvuex/resetCounter'
    })
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
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
