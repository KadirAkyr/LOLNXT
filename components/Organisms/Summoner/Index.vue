<template>
  <div v-if="summoner.id">
    <MoleculesSummonerInformations />
    <MoleculesSummonerMasteries />
    <MoleculesSummonerGames />
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
