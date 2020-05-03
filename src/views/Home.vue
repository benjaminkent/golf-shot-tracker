<template>
  <div class="home">
    <div>
      <h2 class="title">Keep track of your shots on the range.</h2>
      <h3 class="sub-title">
        Choose the clubs you will be practicing and get started.
      </h3>
      <div class="select-container">
        <multiselect
          v-model="selectedClubs"
          :options="options"
          :multiple="true"
          group-values="clubs"
          group-label="clubType"
          :group-select="true"
        />
        <button @click="confirmClubSelection">Confirm Club Selection</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useGolf } from '@/composables/golf'

import Vue from 'vue'
export default Vue.extend({
  setup() {
    const {
      options,
      selectedClubs,
      confirmClubSelection,
      confirmedClubs,
    } = useGolf()

    return {
      options,
      selectedClubs,
      confirmClubSelection,
      confirmedClubs,
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  margin: 20px;
}
.select-container {
  max-width: 600px;
  margin-top: 30px;

  button {
    background-color: #e75a7c;
    border: 1px solid #e75a7c;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.5px;
    font-size: 1em;
    margin: 10px 0;
    width: 100%;
    padding: 12px 0;
    cursor: pointer;
  }
  button:hover {
    background-color: #d65170;
  }
}

@media (max-width: 500px) {
  .home {
    margin: 10px;
  }
}
</style>
