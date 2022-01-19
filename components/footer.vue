<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="footer__content container">
        <div class="footer__left">
          <p>Track your ennemies</p>
        </div>
        <div class="footer__right">
          <span class="active">EN</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #323133;
  color: #fff;
  height: 10rem;
  &__content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__right {
    & > span {
      opacity: 0.5;
      font-weight: 700;
    }
    & .active {
      opacity: 1;
    }
  }
}
</style>