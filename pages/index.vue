<template>
  <div>
    <!-- <div>
    <button @click="getSummById">Click</button>
    <h1>Name : {{ this.name }}</h1>
    <h1>Level : {{ this.level }}</h1>
    <nuxt-link to="testConnexion">Test connexion page</nuxt-link>
  </div> -->
    <div>
      <form action="" @submit.prevent>
        <input v-model="name" type="text" placeholder="Summoner name" />
        <button @click="getSummoner">Search</button>
        <button @click="getMasteries">get Masteries</button>
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
export default {
  data() {
    return {
      name: "",
      account: "",
      champions: "",
    };
  },
  methods: {
    async getSummoner() {
      let name = this.name;
      let link = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-38dab39e-e07a-4cf0-a40f-f972ecd06aae`;
      let response = await fetch(link);
      response = await response.json();
      this.account = response;
      console.log(response);
    },
    async getMasteries() {
      let id = this.account.id;
      let link = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=RGAPI-38dab39e-e07a-4cf0-a40f-f972ecd06aae`;
      let response = await fetch(link);
      response = await response.json();
      this.champions = response;
    },
  },
};
</script>
