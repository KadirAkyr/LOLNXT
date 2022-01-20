<template>
  <div class="card">
    <header class="card-header">
      <div class="card-image card-header-title is-centered">
        <figure class="image is-48x48">
          <img :src="image" />
        </figure>
      </div>
    </header>
    <div class="card-content">
      <div class="media-content">
        <p class="title is-5">{{ champion.name }}</p>
        <p class="title is-5">Mastery {{ championLevel }}</p>
        <p class="subtitle is-6">{{ championPoints }} Points !</p>
      </div>
    </div>
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
.card {
  width: 15rem;
}
</style>