<template>
  <div
    class="slide"
    :class="{ active: selected }"
  >
    <img
      ref="slideImage"
      class="slide__image"
      :src="cleaningType.imageSrc"
      @load="calculateButtonPositions"
    >

    <transition :duration="{ leave: 1000 }">
      <div
        v-if="selected"
        class="slide__informations"
      >
        <HowWeDoCleanSlideInfo
          v-for="(info, index) in slideInfo"
          :key="index"
          :info="info"
          :index="index"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import HowWeDoCleanSlideInfo from '@/components/home/howWeDoClean/HowWeDoCleanSlideInfo'

export default {
  name: 'HowWeDoCleanSliderSlide',
  components: {
    HowWeDoCleanSlideInfo
  },
  props: {
    cleaningType: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      slideInfo: []
    }
  },
  mounted () {
    this.slideInfo = this.cleaningType.slideInfo.map(({ ...info }) => info)
    window.addEventListener('resize', this.throttle)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.throttle)
  },
  methods: {
    throttle () {
      if (!this.selected) { return }

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.calculateButtonPositions()
          this.ticking = false
        })

        this.ticking = true
      }
    },
    calculateButtonPositions () {
      const factWidth = this.$refs.slideImage.offsetWidth
      const factHeight = this.$refs.slideImage.offsetHeight
      const naturalWidth = this.$refs.slideImage.naturalWidth
      const naturalHeight = this.$refs.slideImage.naturalHeight
      const factRatio = factWidth / factHeight
      const naturalRatio = naturalWidth / naturalHeight
      const relativeWidth = factWidth / naturalWidth
      const relativeHeight = factHeight / naturalHeight
      const buttonsWidth = 30
      const buttonsHeight = 30

      this.slideInfo.forEach((info, index) => {
        let posX = this.cleaningType.slideInfo[index].pos.x
        let posY = this.cleaningType.slideInfo[index].pos.y

        if (naturalRatio > factRatio) {
          const relative = naturalRatio / factRatio
          posX = relativeWidth * relative * posX - (factWidth * relative - factWidth) / 2
          posY *= relativeHeight
          posX += buttonsWidth * (relativeHeight / 2) - buttonsWidth / 2
          posY += buttonsHeight * (relativeHeight / 2) - buttonsHeight / 2
        } else if (naturalRatio < factRatio) {
          const relative = factRatio / naturalRatio
          posY = relativeHeight * relative * posY - (factHeight * relative - factHeight) / 2
          posX *= relativeWidth
          posX += buttonsWidth * (relativeWidth / 2) - buttonsWidth / 2
          posY += buttonsHeight * (relativeWidth / 2) - buttonsHeight / 2
        } else {
          posX *= relativeWidth
          posY *= relativeHeight
          posX += buttonsWidth * (relativeWidth / 2) - buttonsWidth / 2
          posY += buttonsHeight * (relativeHeight / 2) - buttonsHeight / 2
        }
        info.pos = { x: posX, y: posY }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0s 1s;
  transform: translateX(100%);
  z-index: 0;

  &.active {
    transition: transform 1s ease-in-out;
    transform: translateX(0);
    z-index: 1;
  }

  &__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__informations {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
