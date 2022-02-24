<template>
  <div class="columns">
    <div class="column" v-if="$fetchState.pending"></div>
    <div class="column" v-else>
      <p>Champion name: {{ player.championName }}</p>
      <p>{{ player.item0 }}</p>
      <p>{{ player.item1 }}</p>
      <p>{{ player.item2 }}</p>
      <p>{{ player.item3 }}</p>
      <p>{{ player.item4 }}</p>
      <p>{{ player.item5 }}</p>
      <p>{{ player.item6 }}</p>
      <pre>{{ player }}</pre>
    </div>
  </div>
</template>

<script>
// Libs
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      game: {},
    };
  },
  props: ["gameId"],
  async fetch() {
    this.game = await this.getGame(this.gameId);
  },
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
    }),
    player() {
      const tab = this.game.info.participants.filter(
        (e) => e.summonerName === this.summoner.name
      );
      return tab[0];
    },
  },
  methods: {
    ...mapActions({
      getGame: "loadGame",
    }),
  },
};
</script>

<style>
</style>