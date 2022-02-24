<template>
  <div>
    <div v-if="$fetchState.pending">Loading ...</div>
    <div v-else>
      <div v-if="games.length">
        <div v-for="gameId in games" :key="gameId">
          <AtomsGame :gameId="gameId" />
        </div>
      </div>
      <div v-else>
        <p class="has-text-centered">No games found</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      games: [],
    };
  },
  watch: {
    async summoner() {
      this.games = await this.getGames();
    },
  },
  async fetch() {
    this.games = await this.getGames();
  },
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
    }),
  },
  methods: {
    ...mapActions({
      getGames: "loadGames",
    }),
  },
};
</script>