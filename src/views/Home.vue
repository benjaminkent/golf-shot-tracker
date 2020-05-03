<template>
  <div class="home">
    <div>
      <h2 class="title">Driving range shot tracker</h2>
      <p v-if="!selectingClubs" @click="reset" class="reset">Reset</p>
      <h3 v-if="selectingClubs" class="sub-title">
        Choose the clubs you will be practicing to get started.
      </h3>
      <div v-if="selectingClubs" class="mult-container">
        <multiselect
          v-model="selectedClubs"
          :options="options"
          :multiple="true"
          group-values="clubs"
          group-label="clubType"
          :group-select="true"
          :close-on-select="false"
          placeholder="Select clubs"
        />
        <button @click="confirmClubSelection">Confirm Club Selection</button>
      </div>
      <div v-if="selectingShots" class="mult-container">
        <h3>How many shot will you track for each club?</h3>
        <multiselect
          v-model="selectedAmountOfShots"
          :options="shotOptions"
          :searchable="false"
        />
        <button @click="confirmShotSelection">Start Tracking Shots</button>
      </div>
      <div v-if="showShotTracker" class="shots-container">
        <ul>
          <li v-for="(club, index) in confirmedClubs" :key="index">
            <shot-tracker :shots="confirmedShots" :club-name="club" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { useGolf } from '@/composables/golf'
import ShotTracker from '@/components/ShotTracker.vue'

export default Vue.extend({
  components: {
    ShotTracker,
  },
  setup() {
    const {
      options,
      selectedClubs,
      confirmClubSelection,
      confirmedClubs,
      selectingClubs,
      shotOptions,
      selectedAmountOfShots,
      selectingShots,
      showShotTracker,
      confirmShotSelection,
      confirmedShots,
      reset,
    } = useGolf()

    return {
      options,
      selectedClubs,
      confirmClubSelection,
      confirmedClubs,
      selectingClubs,
      shotOptions,
      selectedAmountOfShots,
      selectingShots,
      showShotTracker,
      confirmShotSelection,
      confirmedShots,
      reset,
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  margin: 20px;
}
.title {
  margin-bottom: 0;
}
.reset {
  color: #e75a7c;
  text-decoration: underline;
  cursor: pointer;
  margin: 0;
}
.mult-container {
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
    padding: 10px 0;
    cursor: pointer;
  }
  button:hover {
    background-color: #d65170;
  }
}
.shots-container {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}

@media (max-width: 500px) {
  .home {
    margin: 10px;
  }
}
</style>
