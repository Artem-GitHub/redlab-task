<template>
  <section
    v-interval-animation-on-scroll="{
      animationClassName: 'interval-animation',
      interval: 200
    }"
    class="container benefits"
  >
    <div
      v-for="(benefit, index) in benefits"
      :key="index"
      class="benefit"
      data-interval-animation-target-element
      @mouseenter="hoverItem = index"
      @mouseleave="hoverItem = -1"
    >
      <transition name="fade">
        <div v-if="hoverItem !== index" class="benefit__wrap">
          <h3 class="benefit__title">
            {{ benefit.title }}
          </h3>
          <div class="benefit__image">
            <img :src="benefit.imageSrc" :alt="benefit.title">
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div v-if="hoverItem === index" class="benefit__wrap benefit__wrap_purple">
          <div class="benefit__description">
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurBenefits',
  data () {
    return {
      hoverItem: -1
    }
  },
  computed: {
    benefits () {
      return this.$store.getters['home/benefits']
    }
  }
}
</script>

<style lang="scss" scoped>
.benefits {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 60px;
  margin-bottom: 50px;
}

.benefit {
  flex-basis: calc(300 / 1320 * 100%);
  height: 328px;
  position: relative;

  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: $light-grey;
    border-radius: 8px;
    padding: 20px 30px 0;
    position: absolute;
    top: 0;
    left: 0;

    &_purple {
      background-color: $purple;
      padding: 40px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: $black;
  }

  &__image {
    text-align: center;

    & > img {
      height: 100%;
      object-fit: contain;
    }
  }

  &__description {
    font-size: 16px;
    line-height: 22px;
    color: $white;
  }
}
</style>
