<template>
  <div v-if="!summoner.name">
    <form @submit.prevent="search(name)">
      <b-field label="Name" v-model="name" placeholder="Summoner name">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-button class="mb-2" type="is-primary is-light submit">Search</b-button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions({
      search: "searchSummonerByName",
    }),
  },
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
    }),
    ...mapActions({
      loadrank: "loadRank",
    }),
  },
};
</script>

<style scoped>
form {
  margin: 1rem auto;
}
</style>