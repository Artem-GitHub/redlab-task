<template>
  <section
    v-animation-on-scroll="{
      animationClassName: 'group-animation',
      threshold: 1
    }"
    v-interval-animation-on-scroll="{
      animationClassName: 'interval-animation',
      interval: 200,
      threshold: 1
    }"
    class="how-we-do"
  >
    <HowWeDoCleanTitle />

    <div class="content">
      <HowWeDoCleanSidebar
        :active-button="activeButton"
        @switchActiveButton="switchActiveButton"
      />
      <HowWeDoCleanSlider :active-slide="activeButton" />
    </div>
  </section>
</template>

<script>
import HowWeDoCleanTitle from '@/components/home/howWeDoClean/HowWeDoCleanTitle'
import HowWeDoCleanSidebar from '@/components/home/howWeDoClean/HowWeDoCleanSidebar'
import HowWeDoCleanSlider from '@/components/home/howWeDoClean/HowWeDoCleanSlider'

export default {
  name: 'HowWeDoClean',
  components: {
    HowWeDoCleanTitle,
    HowWeDoCleanSidebar,
    HowWeDoCleanSlider
  },
  data () {
    return {
      activeButton: 0
    }
  },
  methods: {
    switchActiveButton (index) {
      this.activeButton = index
    }
  }
}
</script>

<style lang="scss" scoped>
.how-we-do {
  width: 100%;
  height: 100vh;
  position: relative;
}

.content {
  display: flex;
  overflow: hidden;
  height: 100%;
}
</style>
