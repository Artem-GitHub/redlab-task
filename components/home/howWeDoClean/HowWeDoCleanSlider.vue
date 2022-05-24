<template>
  <div
    v-animation-on-scroll="{
      animationClassName: 'slider-animation',
      threshold: 0.2
    }"
    class="slider"
  >
    <HowWeDoCleanSliderSlide
      v-for="(type, index) in cleaningTypes"
      :key="index"
      :selected="activeSlide === index"
      :cleaning-type="type"
    />
  </div>
</template>

<script>
import HowWeDoCleanSliderSlide from '@/components/home/howWeDoClean/HowWeDoCleanSliderSlide'

export default {
  name: 'HowWeDoCleanSlider',
  components: {
    HowWeDoCleanSliderSlide
  },
  props: {
    activeSlide: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    cleaningTypes () {
      return this.$store.getters['home/cleaningTypes']
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  flex-basis: calc(1065 / 1440 * 100%);
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
