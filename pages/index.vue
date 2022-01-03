<template>
  <div>
    <div class="searchBar">
      <form action="" @submit.prevent>
        <input v-model="name" type="text" placeholder="Summoner name" />
        <br />
        <br />
        <button @click="getSummoner">Search</button>
      </form>
      <span>
        <img :src="this.iconImg" height="120px" width="120px" />
        Icon :{{ this.account.profileIconId }}</span
      >
      <span>Summoner Name : {{ this.account.name }}</span>
      <span>Level : {{ this.account.summonerLevel }}</span>
      <ul>
        <p v-if="champions">
          List of mastered champions of {{ this.account.name }} :
        </p>
        <li v-for="champion in this.champions.slice(0, 5)" :key="champion.id">
          <span>Champion name {{ champion.championId }} </span>
          <br />
          <span> Champion masyery level {{ champion.championLevel }}</span>
          <br />
          <span>Champion mastery points {{ champion.championPoints }}</span>
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import header from "../components/header.vue";
export default {
  components: { header },
  data() {
    return {
      name: "",
      account: "",
      champions: "",
      apikey: "RGAPI-ec3892ad-c523-47e9-8949-f12f00484aa3",
      iconImg: "",
    };
  },
  methods: {
    async getSummoner() {
      try {
        let name = this.name;
        let link = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${this.apikey}`;
        let response = await fetch(link);
        response = await response.json();
        this.account = response;
        console.log(response);
        this.getMasteries();
        this.getIcon();
        this.getChampName();
      } catch (error) {
        return "Inexistant summoner name";
      }
    },
    async getMasteries() {
      let id = this.account.id;
      let link = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${this.apikey}`;
      let response = await fetch(link);
      response = await response.json();
      this.champions = response;
    },
    async getIcon() {
      let link = `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${this.account.profileIconId}.png`;
      let response = await fetch(link);
      this.iconImg = response.url;
    },
    async getChampName() {
      let link = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`;
      let response = await fetch(link);
      console.log(response);
    },
  },
};
</script>

<style scoped>
.searchBar {
  margin-top: 10rem;
}
</style>
