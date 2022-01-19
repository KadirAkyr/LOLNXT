<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  async fetch() {
    this.$store.dispatch("loadChampions");
  },
};
</script>