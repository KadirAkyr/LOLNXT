<template>
  <div>
    <div class="searchBar">
      <form action="" @submit.prevent>
        <input v-model="name" type="text" placeholder="Summoner name" />
        <br />
        <br />
        <button @click="getSummoner">Search</button>
      </form>
      <h1>Name : {{ this.account.name }}</h1>
      <h1>Level : {{ this.account.summonerLevel }}</h1>
      <ul>
        <h2 v-if="champions">
          List of mastered champions of {{ this.account.name }} :
        </h2>
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
      apikey: "RGAPI-ec3892ad-c523-47e9-8949-f12f00484aa3"
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
      this.getMasteries()
      } catch (error) {
        return "Inexistant summoner name"
      }
      
    },
    async getMasteries() {
      let id = this.account.id;
      let link = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${this.apikey}`;
      let response = await fetch(link);
      response = await response.json();
      this.champions = response;
    },
  },
};
</script>

<style scoped>
.searchBar {
  margin-top: 10rem;
}
</style>
