<template>
  <form @submit.prevent="search(name)">
    <input v-model="name" type="text" placeholder="Summoner name" />
    <button type="submit">Search</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
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
};
</script>

<style scoped>
form {
  margin: 1rem auto;
}
</style>