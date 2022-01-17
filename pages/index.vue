<template>
  <div>
    <div class="searchBar">
      <form action="" @submit.prevent>
        <input v-model="name" type="text" placeholder="Summoner name" />
        <br />
        <br />
        <button @click="getSummoner">Search</button>
      </form>
      <div v-if="champions">
        <img :src="this.iconImg" height="120px" width="120px" />
        <span>Level : {{ this.account.summonerLevel }}</span>
        <h1>Summoner Name : {{ this.account.name }}</h1>
        <ul>
          <p>List of mastered champions of {{ this.account.name }} :</p>
          <li v-for="champion in this.champions.slice(0, 5)" :key="champion.id">
            <br />
            <span> Champion masyery level {{ champion.championLevel }}</span>
            <br />
            <span>Champion mastery points {{ champion.championPoints }}</span>
            <br />
          </li>
        </ul>
      </div>
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
      apikey: "RGAPI-86fa8908-010d-4a68-8d50-cc9fc4f3251b",
      iconImg: "",
      championsNames: "",
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
        this.getMasteries();
        this.getIcon();
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
      // Set champion key
      const championKeys = [];
      const realChamps = this.champions.slice(0, 5);
      console.log(realChamps);
      realChamps.forEach((champion) => {
        championKeys.push(champion.championId.toString());
      }),
        console.log(championKeys),
        // Get json file
        fetch(
          "http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json"
        ).then((response) => {
          // Get json data
          response.json().then((json) => {
            // Object to array
            const items = Object.values(json.data);

            // Filter to get champion by id
            const champions = items.filter((item) =>
              championKeys.includes(item.key)
            );

            this.championsNames = champions;
            console.log(this.championsNames);
          });
        });
    },
  },
};
</script>

<style scoped>
.searchBar {
  margin-top: 10rem;
}
</style>
