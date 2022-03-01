<template>
  <div class="columns p-5">
    <div class="column is-narrow pr-5">
      <div class="is-relative mb-4">
        <img :src="icon" height="120px" width="120px" class="profilIcon" />
        <template v-if="lolStats">
          <b-icon
            v-if="lolStats.hotstreak"
            type="is-white"
            icon="fire"
            class="hotstreak"
          />
        </template>
        <b-tag rounded type="is-primary" class="level">{{
          summoner.summonerLevel
        }}</b-tag>
      </div>
      <h1 class="has-text-centered has-text-weight-bold">
        {{ summoner.name }}
      </h1>
    </div>
    <div v-if="lolStats" class="column is-flex has-border-left pl-5">
      <img
        :src="rankIcon"
        width="120px"
        height="120px"
        class="rankIcon is-align-self-flex-start mr-4"
      />
      <div class="rankInfo">
        <p class="is-size-7 mb-2 mt-4">Ranked Solo</p>
        <p class="has-text-weight-bold is-size-1 mb-2">
          {{ lolStats.tier }} {{ lolStats.rank }}
        </p>
        <p class="ml-1">{{ lolStats.leaguePoints }} LP</p>
      </div>
    </div>
    <div v-else class="column is-flex has-border-left pl-5">
      <img
        src="/ranked/Unranked.png"
        width="120px"
        height="120px"
        class="rankIcon is-align-self-flex-start mr-4"
      />
      <div class="rankInfo">
        <p class="is-size-7 mb-2 mt-4">Ranked Solo</p>
        <p class="has-text-weight-bold is-size-1 mb-2">Unranked</p>
      </div>
    </div>
    <div v-if="lolStats" class="column is-narrow pl-5 has-border-left">
      <div
        class="chart"
        :style="
          'background: conic-gradient(#48c78e, #48c78e ' +
          winRatio +
          '%, #f14668 ' +
          winRatio +
          '%)'
        "
      >
        <span class="chartValue"> {{ winRatio }}% </span>
      </div>
      <p class="winLose has-text-centered mt-2">
        {{ lolStats.wins }} V - {{ lolStats.losses }} L
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";
export default {
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
      rank: "getRank",
    }),
    rankIcon() {
      const rankName = _.capitalize(this.lolStats.tier);
      return `/ranked/${rankName}.png`;
    },
    icon() {
      const rankName = this.summoner.profileIconId;
      return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/${rankName}.png`;
    },
    winRatio() {
      return _.round(
        (this.lolStats.wins / (this.lolStats.wins + this.lolStats.losses)) *
          100,
        1
      );
    },
    lolStats() {
      const solo = this.rank.filter(
        (type) => type.queueType === "RANKED_SOLO_5x5"
      );
      return solo[0];
    },
  },
};
</script>

<style scoped>
.column {
  padding: 0;
}
.has-border-left {
  border-left: solid 1px rgba(0, 0, 0, 0.1);
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
.rankIcon {
  display: inline-block;
}
.rankInfo {
  line-height: 1;
}
.chart {
  width: 120px;
  padding-top: 100%;
  border-radius: 100%;
  position: relative;
}
.chart::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: whitesmoke;
  transform: scale(0.7);
}
.chartValue {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
}
</style>