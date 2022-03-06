<template>
  <div>
    <div v-if="$fetchState.pending">Loading ...</div>
    <div v-else>
      <div v-if="masteries.length">
        <h2 class="title is-3">Top 5 champions</h2>
        <div v-for="champion in champions" :key="champion.id" class="block">
          <AtomsChampion v-bind="champion" />
        </div>
      </div>
      <div v-else>
        <p class="has-text-centered">No top champions</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      masteries: [],
    };
  },
  watch: {
    async summoner() {
      this.masteries = await this.getMasteries();
    },
  },
  async fetch() {
    this.masteries = await this.getMasteries();
  },
  computed: {
    ...mapGetters({
      summoner: "getSummoner",
    }),
    champions() {
      return this.masteries.splice(0, 5);
    },
  },
  methods: {
    ...mapActions({
      getMasteries: "getMasteries",
    }),
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  top: 0;
  left: 1rem;
  transform: translateY(-50%);
}
</style>