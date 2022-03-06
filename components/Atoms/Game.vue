<template>
  <div class="game card">
    <div class="game__content" v-if="$fetchState.pending"></div>
    <div class="game__content" v-else>
      <div class="game__profile" v-if="spells.length">
        <div class="game__profile__images">
          <b-image rounded class="game__champion" :src="imageChamp" />
          <b-image rounded class="game__spell" :src="imageSpell1" />
          <b-image rounded class="game__spell" :src="imageSpell2" />
        </div>
        <p class="has-text-centered has-text-weight-bold mt-2">
          {{ player.championName }}
        </p>
      </div>
      <div class="game__score">
        <p class="has-text-centered">Score</p>
        <p class="has-text-weight-bold">
          <span class="has-text-success">{{ player.kills }} </span> /
          <span class="has-text-danger">{{ player.deaths }}</span> /
          <span>{{ player.assists }}</span>
        </p>
        <p :class="kda > 2.5 ? 'has-text-success' : 'has-text-danger'">
          {{ kda }} KDA
        </p>
        <p>{{ player.totalMinionsKilled }} CS</p>
      </div>
      <div class="game__items">
        <p>Items</p>
        <img v-if="this.player.item0 != 0" :src="item0" />
        <span v-else class="elseEmpty"></span>

        <img v-if="this.player.item1 != 0" :src="item1" />
        <span v-else class="elseEmpty"></span>

        <img v-if="this.player.item2 != 0" :src="item2" />
        <span v-else class="elseEmpty"></span>

        <img v-if="this.player.item3 != 0" :src="item3" />
        <span v-else class="elseEmpty"></span>

        <img v-if="this.player.item4 != 0" :src="item4" />
        <span v-else class="elseEmpty"></span>

        <img v-if="this.player.item5 != 0" :src="item5" />
        <span v-else class="elseEmpty"></span>

        <img v-if="this.player.item6 != 0" :src="item6" />
        <span v-else class="elseEmpty"></span>
      </div>
      <div class="game__result">
        <p>{{ winOrLose }}</p>
        <b-icon icon="crown" />
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
    imageChamp() {
      return `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${this.champion.image.full}`;
    },
    champion() {
      return Object.values(this.champions).find(
        (champion) => champion.key === this.player.championId.toString()
      );
    },
  },
  methods: {
    ...mapActions({
      getGame: "loadGame",
    }),
  },
};
</script>

<style scoped>
.game {
  padding: 1.5rem 0;
  margin-bottom: 1rem;
}
.game__content {
  display: flex;
}
.game__content > * {
  padding: 0 1.5rem;
}
.game__content > *:not(:first-child) {
  border-left: solid 1px rgba(0, 0, 0, 0.1);
}
.game__profile__images {
  position: relative;
}
.game__champion {
  width: 96px;
  height: 96px;
}
.game__spell {
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 0;
}
.game__spell:first-child {
  left: 0;
}
.game__spell:last-child {
  right: 0;
}
.elseEmpty {
  background-color: #99b9cf;
  width: 64px;
  height: 64px;
  list-style: none;
  display: inline-block;
}
</style>