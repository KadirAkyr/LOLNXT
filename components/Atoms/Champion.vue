<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img class="is-rounded" :src="image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ champion.name }}</p>
          <p class="subtitle is-6">Mastery {{ championLevel }}</p>
        </div>
      </div>
      <hr />
      <div class="icon-text mb-2">
        <b-icon icon="creation" />
        <span class="ml-2">{{ champion.tags.join(", ") }}</span>
      </div>

      <div class="icon-text">
        <b-icon icon="arm-flex" />
        <span class="ml-2">{{ championPoints }} pts</span>
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
      return `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${this.champion.image.full}`;
    },
  },
};
</script>