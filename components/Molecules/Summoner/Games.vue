<template>
  <div v-if="gamesId.length">
    <!-- <div v-for="game in gamesId" :key="game.id">
      <p>{{ game }}</p>
    </div> -->
    <p>{{ games }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      gamesId: [],
      gamesList: [],
    };
  },
  async fetch() {
    this.gamesId = await this.getGames();
    console.log(this.gamesId);
  },
  methods: {
    ...mapActions({
      getGames: "loadGames",
      getGame: "loadGame",
    }),
    getMatch(matchId) {
      this.getGame(matchId);
    },
  },
  computed: {
    games() {
      this.gamesId.forEach((game) => {
        this.getMatch(game);
        return game;
      });
    },
  },
};
</script>

<style>
</style>