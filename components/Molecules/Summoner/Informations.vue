<template>
  <div>
    <img :src="icon" height="120px" width="120px" />
    <span>Level : {{ summoner.summonerLevel }}</span>
    <h1>Summoner Name : {{ summoner.name }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
    }),
    icon() {
      return `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${this.summoner.profileIconId}.png`;
    },
  },
};
</script>

<style>
</style>