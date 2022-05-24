<template>
  <div class="description">
    <div class="description__wrap">
      <h3 class="description__title">
        Как мы убираем
      </h3>

      <p class="description__subtitle">
        Клинер приезжает в назначенное время со всем необходимым и сразу приступает к делу. Вам остаётся только оценить результат.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowWeDoCleanTitle'
}
</script>

<style lang="scss" scoped>
.description {
  width: 100%;
  position: absolute;

  &__wrap {
    display: flex;
    justify-content: space-between;
    width: calc(1065 / 1440 * 100%);
    margin: 0 auto;
  }

  &__title {
    width: 535px;
    font-size: 44px;
    line-height: 52px;
    color: $black;
  }

  &__subtitle {
    width: 414px;
    font-size: 18px;
    line-height: 25px;
    color: $black;
  }
}
</style>
