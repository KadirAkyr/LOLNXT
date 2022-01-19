<template>
  <div v-if="masteries.length">
    <h2>Top 5 champions</h2>
    <div v-for="champion in champions" :key="champion.id">
      <AtomsChampion v-bind="champion" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      masteries: [],
    };
  },
  async fetch() {
    this.masteries = await this.getMasteries();
  },
  computed: {
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