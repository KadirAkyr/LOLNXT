<template>
  <div>
    <div v-if="summoner.id">
      <div class="columns is-multiline">
        <div
          class="column is-full has-background-white-ter roundedCorners mb-6"
        >
          <MoleculesSummonerInformations />
        </div>
        <div
          class="
            column
            is-one-quarter
            has-background-white-ter
            px-5
            py-6
            is-relative
            roundedCorners
          "
        >
          <MoleculesSummonerMasteries />
        </div>
        <div class="column is-three-quarters">
          <MoleculesSummonerGames />
        </div>
      </div>
    </div>
    <template v-else>
      <div class="is-size-1 mb-6 has-text-centered myTitle">
        Welcome to Toxic Tracker
        <p><img class="myImg" src="/logo2.png" /></p>
      </div>
      <div class="columns is-full roundedCorners info mt-6">
        <div class="column card has-text-centered">
          For who ?
          <div class="card-content">Mad players like us</div>
        </div>

        <div class="column card has-text-centered">
          How to use ?
          <div class="card-content">Just search for a summoner name !</div>
        </div>

        <div class="column card has-text-centered">
          Any questions ?
          <div class="card-content mt-2">xxxxx@gmail.com</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
    }),
  },
};
</script>
<style scoped>
.roundedCorners {
  border-radius: 1rem;
}
.myImg {
  width: 25%;
  height: 25%;
}
</style>