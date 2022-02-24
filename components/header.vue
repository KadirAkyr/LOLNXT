<template>
  <b-navbar class="header" wrapper-class="container" fixed-top shadow>
    <template #brand>
      <b-navbar-item tag="nuxt-link" to="/">
        <b-image src="/logo2.png" alt="logo" />
        <h1 class="ml-2">Toxic Tracker</h1>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="div"> <OrganismsSearchSummoner /> </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped>
.navbar-item img {
  max-height: 3rem;
}
</style>

