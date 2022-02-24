<template>
  <div v-if="summoner.id">
    <div class="columns is-multiline">
      <div class="column is-full has-background-white-ter roundedCorners mb-6">
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
</style>