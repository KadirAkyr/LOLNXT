<template>
  <div>
    <pre>{{ game }}</pre>
  </div>
</template>

<script>
// Libs
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions({
      getGame: "loadGame",
    }),
  },
};
</script>

<style>
</style>