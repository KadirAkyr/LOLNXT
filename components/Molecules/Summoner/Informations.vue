<template>
  <div class="">
    <img :src="icon" height="120px" width="120px" />
    <span>{{ summoner.summonerLevel }}</span>
    <h1>{{ summoner.name }}</h1>
    <pre>{{ rank }}</pre>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
      rank: "getRank",
    }),
    icon() {
      return `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${this.summoner.profileIconId}.png`;
    },
  },
};
</script>

<style>
</style>