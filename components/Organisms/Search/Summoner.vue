<template>
  <form @submit.prevent="search(name)">
    <b-field grouped>
      <b-input
        placeholder="Summoner name"
        v-model="name"
        type="search"
      ></b-input>
      <p class="control">
        <b-button class="button is-primary is-light">Track</b-button>
      </p>
    </b-field>
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