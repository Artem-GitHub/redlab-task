<template>
  <div class="regular-cleaning">
    <h1>Hello from after regular cleaning</h1>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'regular cleaning page'
    }
  }
}
</script>

<style lang="scss">
.regular-cleaning {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 36px;
  color: $black;
}
</style>
