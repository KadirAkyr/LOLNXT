<template>
  <div v-if="summoner.id">
    <div class="columns is-multiline">
      <div class="column is-full has-background-white-ter header">
        <MoleculesSummonerInformations />
      </div>
      <div class="column is-one-quarter">
        <MoleculesSummonerMasteries />
      </div>
      <div class="column">
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
.header {
  border-radius: 1rem;
}
</style>