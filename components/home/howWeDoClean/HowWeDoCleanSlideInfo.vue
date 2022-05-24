<template>
  <div
    class="information"
    :style="{
      left: `${infoPosition.x}px`,
      top: `${infoPosition.y}px`
    }"
  >
    <transition name="fade">
      <div
        v-if="showText"
        class="information__text"
      >
        <p>
          {{ info.text }}
        </p>
      </div>
    </transition>

    <button
      class="information__button"
      :class="{ show: showText }"
      @click="showText = !showText"
    >
      <PlusIcon />
    </button>
  </div>
</template>

<script>
import PlusIcon from '@/components/icons/PlusIcon'

export default {
  name: 'HowWeDoCleanSlideInfo',
  components: {
    PlusIcon
  },
  props: {
    info: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      showText: false,
      slideDelay: 1000
    }
  },
  computed: {
    infoPosition () {
      return this.info.pos
    }
  },
  mounted () {
    this.showInfoWithDelay()
  },
  methods: {
    showInfoWithDelay () {
      setTimeout(() => {
        this.$el.classList.add('show')
      }, this.index * 200 + this.slideDelay)
    }
  }
}
</script>

<style lang="scss" scoped>
.information {
  position: absolute;
  opacity: 0;

  &.show {
    transition: opacity 0.4s ease;
    opacity: 1;
  }

  &__button {
    width: 30px;
    height: 30px;
    background-color: $purple;
    color: $white;
    border-radius: 50%;
    transition: box-shadow 0.4s ease;

    & svg {
      vertical-align: middle;
      transform: rotate(0deg);
      transition: transform 0.5s ease;
    }

    &:not(:hover) {
      box-shadow: 0px 0px 0px 10px rgba(90, 48, 240, 0.2);
    }

    &:hover {
      box-shadow: 0px 0px 0px 10px rgba(90, 48, 240, 0.3);
    }

    &.show {
      box-shadow: 0px 0px 0px 0px rgba(90, 48, 240, 0.2);

      & svg {
        transform: rotate(225deg);
      }
    }
  }

  &__text {
    position: absolute;
    background-color: $white;
    border-radius: 4px;
    font-weight: 500;
    font-size: 13px;
    color: $text-secondary;
    white-space: nowrap;
    padding: 12px;
    top: -50px;
    left: 0;

    &:before {
      content: "";
      border: 6px solid transparent;
      border-top: 6px solid $white;
      position: absolute;
      top: 100%;
      left: 10px;
    }
  }
}
</style>
