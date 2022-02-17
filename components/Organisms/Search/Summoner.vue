<template>
  <form @submit.prevent="search(name)">
    <b-field v-model="name" placeholder="Summoner name">
      <b-input v-model="name" placeholder="Summoner Name" />
    </b-field>
    <b-button type="is-primary is-light submit">Search</b-button>
  </form>
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
  },
};
</script>

<style scoped>
form {
  margin: 1rem auto;
}
</style>