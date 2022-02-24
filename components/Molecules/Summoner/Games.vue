<template>
  <div v-if="games.length">
    <div v-for="game in games" :key="game">
      <AtomsGame :gameId="game" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      games: [],
    };
  },
  async fetch() {
    this.games = await this.getGames();
  },
  methods: {
    ...mapActions({
      getGames: "loadGames",
    }),
  },
};
</script>

<style>
</style>