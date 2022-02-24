<template>
  <div class="columns">
    <div class="column is-narrow has-border-right">
      <div class="is-relative mb-4">
        <img :src="icon" height="120px" width="120px" class="profilIcon" />
        <b-icon
          v-if="rank.hotstreak"
          type="is-white"
          icon="fire"
          class="hotstreak"
        />
        <b-tag rounded type="is-primary" class="level">{{
          summoner.summonerLevel
        }}</b-tag>
      </div>
      <h1 class="has-text-centered has-text-weight-bold">
        {{ summoner.name }}
      </h1>
    </div>
    <div v-if="rank" class="column">
      <img :src="rankIcon" width="120px" height="120px" />
      <p>{{ rank.tier }}</p>
      <p>{{ rank.rank }}</p>
      <p>LP {{ rank.leaguePoints }}</p>
    </div>
    <!-- <p>Ranked 5x5 stats</p>
      <p>Wins {{ rank.wins }}</p>
      <p>Losses {{ rank.losses }}</p>
      <p>Hot streak {{ rank.hotStreak }}</p> -->
    <div v-else class="column">
      <img src="/ranked/Unranked.png" width="120px" height="120px" />
      <p>Unranked</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
      rank: "getRank",
    }),
    rankIcon() {
      return `/ranked/${this.rank.tier}.png`;
    },
    icon() {
      return `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${this.summoner.profileIconId}.png`;
    },
  },
};
</script>

<style scoped>
.has-border-right {
  border-right: solid 1px rgba(0, 0, 0, 0.1);
}
.hotstreak {
  background-color: #7957d5;
  border-radius: 100%;
  position: absolute;
  top: -8px;
  right: -8px;
}
.level {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}
.profilIcon {
  border-radius: 8px;
}
</style>