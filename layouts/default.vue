<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <Nuxt />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  async fetch() {
    this.$store.dispatch("loadChampions");
  },
  // async fetch() {
  //   this.$store.dispatch("loadSpells");
  // },
};
</script>