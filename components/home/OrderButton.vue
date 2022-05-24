<template>
  <button
    class="order-button"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <div class="order-button__wrap">
      <span
        ref="buttonText"
        class="order-button__text"
      >
        Заказать уборку
      </span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'OrderButton',
  methods: {
    onEnter (event) {
      this.$el.classList.toggle('onover')
      window.addEventListener('mousemove', this.calculateButtonPosition)
    },
    onLeave () {
      this.$el.classList.toggle('onover')
      window.removeEventListener('mousemove', this.calculateButtonPosition)
      this.returnToDefaultPosition()
    },
    calculateButtonPosition (event) {
      const buttonSize = 195
      const centerX = document.documentElement.clientWidth / 2
      const centerY = document.documentElement.clientHeight - (buttonSize + 20) / 2
      const relativeX = Math.sqrt(event.clientX / centerX)
      const relativeY = Math.sqrt(event.clientY / centerY)
      const shiftX = event.clientX - centerX * relativeX
      const shiftY = event.clientY - centerY * relativeY
      const positionX = centerX + shiftX
      const positionY = centerY + shiftY
      const positionXResult = positionX - buttonSize / 2
      const positionYResult = positionY - buttonSize / 2
      this.$el.style.left = `${positionXResult}px`
      this.$el.style.top = `${positionYResult}px`

      const buttonText = this.$refs.buttonText
      const buttonTextWidth = buttonText.offsetWidth
      const buttonTextHeight = buttonText.offsetHeight
      const widthRatio = buttonTextWidth / centerX
      const heightRatio = buttonTextHeight / centerY
      const shiftBtnX = shiftX * 2 * widthRatio
      const shiftBtnY = shiftY * 4 * heightRatio
      buttonText.style.left = `${buttonSize / 2 - buttonTextWidth / 2 + shiftBtnX}px`
      buttonText.style.top = `${buttonSize / 2 - buttonTextHeight / 2 + shiftBtnY}px`
    },
    returnToDefaultPosition () {
      this.$el.setAttribute('style', 'top: calc(100% - 135px); left: calc(50% - 165px / 2);')
      this.$refs.buttonText.setAttribute('style', 'top: calc(50% - 24px); left: calc(50% - 50px);')
    }
  }
}
</script>

<style lang="scss" scoped>
.order-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 165px;
  background-color: inherit;
  border-radius: 50%;
  position: fixed;
  top: calc(100% - 135px);
  left: calc(50% - 165px / 2);
  transition: all 0.1s ease;
  animation: order-button-rotate 4s infinite linear;

  &:before {
    content: '';
    position: absolute;
    border: 2px solid #F3F6FB00;
    border-radius: 50%;
    width: 165px;
    height: 165px;
    transition: all 0.2s ease;
  }

  &.onover {
    width: 195px;
    height: 195px;
    animation: none;

    &:before {
      content: '';
      width: 300px;
      height: 300px;
      border: 2px solid #F3F6FB80;
    }
  }

  &__wrap {
    width: 165px;
    height: 165px;
    background-color: $purple;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    color: $white;
    border-radius: 50%;
    position: relative;
    transition: all 0.2s ease;

    .onover & {
      width: 195px;
      height: 195px;
    }
  }

  &__text {
    width: 100px;
    position: absolute;
    top: calc(50% - 24px);
    left: calc(50% - 50px);
  }
}
</style>
