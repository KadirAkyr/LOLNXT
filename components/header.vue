<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header__content container">
        <div class="header__left">
          <span>icon</span>
        </div>
        <div class="header__center">
          <h1 class="header__brand">Toxic Tracker</h1>
        </div>
        <div class="header__right">
          <span>icon</span>
          <span>icon</span>
          <span>icon</span>
          <span>icon</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: hsla(0, 0%, 100%, 0.95);
  height: 5rem;
  &__content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__right {
    & > * {
      margin-left: 0.5rem;
    }
  }
  &__brand {
    font-weight: 100;
    letter-spacing: -1px;
  }
}
</style>