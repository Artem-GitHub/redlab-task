<template>
  <section class="container banner">
    <div class="banner__image">
      <img src="@/assets/images/main-banner.jpg">
    </div>
    <div class="banner__inner">
      <h1 class="banner__title">
        Уборка квартир в Киеве
      </h1>
      <p class="banner__subtitle">
        Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и проведем генеральную уборку.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainBanner'
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  &__inner {
    flex-basis: 400px;
    margin: 0 auto;
  }

  &__title {
    font-size: 76px;
    line-height: 84px;
    color: $black;
    margin-bottom: 30px;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 25px;
    color: $black;
  }
}
</style>
