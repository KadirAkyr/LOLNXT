<template>
  <div>
    <p>Game duration {{ gameDuration }}</p>
    <pre>{{ gamesId }}</pre>
  </div>
</template>

<script>
// Libs
import { mapActions } from "vuex";
export default {
  props: ["gameDuration", "gamesId"],
  computed: {
    ...mapActions({
      getGame: "loadGame",
    }),
  },
};
</script>

<style>
</style>