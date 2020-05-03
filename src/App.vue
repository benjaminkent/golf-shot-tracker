<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e7ecef;
}
body {
  margin: 0;
  background-color: #272932;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
