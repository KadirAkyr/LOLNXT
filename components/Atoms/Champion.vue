<template>
  <div class="content">
    <img :src="image" />
    <p>{{ champion.name }}</p>
    <p>Mastery level {{ championLevel }}</p>
    <p>Mastery points {{ championPoints }}</p>
    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["championId", "championLevel", "championPoints"],
  computed: {
    ...mapGetters({
      champions: "getChampions",
    }),
    champion() {
      return Object.values(this.champions).find(
        (champion) => champion.key === this.championId.toString()
      );
    },
    image() {
      return `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${this.champion.image.full}`;
    },
  },
};
</script>

<style>
</style>