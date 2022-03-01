<template>
  <div class="columns">
    <div class="column" v-if="$fetchState.pending"></div>
    <div class="column" v-else>
      <!-- <pre> {{ game }} </pre> -->
      <!-- <pre> {{ player }} </pre> -->
      <p>{{ player.championName }}</p>
      <p>{{ player.kills }} / {{ player.deaths }} / {{ player.assists }}</p>
      <p>{{ winOrLose }}</p>
      <p>CS {{ player.totalMinionsKilled }}</p>
      <p>KDA {{ kda }}</p>
      <div class="items">
        <img :src="item0" />
        <img :src="item1" />
        <img :src="item2" />
        <img :src="item3" />
        <img :src="item4" />
        <img :src="item5" />
        <img :src="item6" />
      </div>
      <div class="summs" v-if="spells.length">
        <img :src="imageSpell1" />
        <img :src="imageSpell2" />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
// Libs
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      game: {},
    };
  },
  props: ["gameId"],
  async fetch() {
    this.game = await this.getGame(this.gameId);
    this.$store.dispatch("loadSpells");
  },
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
      champions: "getChampions",
      summonerSpells: "getSpells",
    }),
    player() {
      const tab = this.game.info.participants.filter(
        (e) => e.summonerName === this.summoner.name
      );
      return tab[0];
    },
    item0() {
      if (this.player.item0 != 0)
        return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/${this.player.item0}.png`;
    },
    item1() {
      if (this.player.item1 != 0)
        return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/${this.player.item1}.png`;
    },
    item2() {
      if (this.player.item2 != 0)
        return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/${this.player.item2}.png`;
    },
    item3() {
      if (this.player.item3 != 0)
        return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/${this.player.item3}.png`;
    },
    item4() {
      if (this.player.item4 != 0)
        return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/${this.player.item4}.png`;
    },
    item5() {
      if (this.player.item5 != 0)
        return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/${this.player.item5}.png`;
    },
    item6() {
      if (this.player.item6 != 0)
        return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/${this.player.item6}.png`;
    },
    kda() {
      return _.round(this.player.challenges.kda, 2);
    },
    winOrLose() {
      if (this.player.win) return "Victory";
      return "Defeat";
    },
    summSpells1() {
      return Object.values(this.summonerSpells).find(
        (spell) => spell.key == this.player.summoner1Id
      );
    },
    summSpells2() {
      return Object.values(this.summonerSpells).find(
        (spell) => spell.key == this.player.summoner2Id
      );
    },
    spells() {
      return Object.values(this.summonerSpells);
    },
    imageSpell1() {
      return `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${this.summSpells1.image.full}`;
    },
    imageSpell2() {
      return `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${this.summSpells2.image.full}`;
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