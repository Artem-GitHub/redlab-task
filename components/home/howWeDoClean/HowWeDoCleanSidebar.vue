<template>
  <aside class="sidebar">
    <h4 class="sidebar__title">
      Как мы убираем
    </h4>

    <ul class="sidebar__buttons">
      <li
        v-for="(type, index) in cleaningTypes"
        :key="index"
      >
        <button
          class="sidebar__button"
          :class="{ active: activeButton === index, 'show-array': showArray === index }"
          data-interval-animation-target-element
          @click="switchButton(index)"
        >
          <span class="sidebar__button-array">
            &rarr;
          </span>

          <span class="sidebar__button-text">
            {{ type.name }}
          </span>
        </button>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'HowWeDoCleanSidebar',
  props: {
    activeButton: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {
      onSwitch: false,
      showArray: 0,
      slideDelay: 1000,
      arrowDelay: 500
    }
  },
  computed: {
    cleaningTypes () {
      return this.$store.getters['home/cleaningTypes']
    }
  },
  methods: {
    switchButton (index) {
      if (!this.onSwitch && this.showArray !== index) {
        this.onSwitch = true
        this.$emit('switchActiveButton', index)
        setTimeout(() => {
          this.showArray = index
          setTimeout(() => {
            this.onSwitch = false
          }, this.arrowDelay)
        }, this.slideDelay)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  flex-basis: calc(375 / 1440 * 100%);
  background-color: $purple;
  padding: 35px 0 0 calc(60 / 1440 * 100%);

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: $white;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  &__button {
    display: flex;
    align-items: center;
    background-color: transparent;
    font-size: 44px;
    line-height: 54px;
    color: $white;
    margin-bottom: 20px;
    padding-right: 10px;
    overflow: hidden;
    transition: opacity 0.2s;

    &:not(:hover) {
      opacity: 0.7;
    }

    &:hover {
      opacity: 1;
    }

    &-array {
      display: block;
      margin-right: 10px;
      margin-left: -54px;
      transition: margin-left 0.5s ease-in-out;

      .show-array & {
        transition: margin-left 0.5s ease-in-out;
        margin-left: 0;
      }
    }

    &.active, &.show-array {
      font-style: italic;
      opacity: 1;
    }
  }
}
</style>
