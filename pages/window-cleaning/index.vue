<template>
  <div class="window-cleaning">
    <h1>Hello from after window cleaning</h1>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'window cleaning page'
    }
  }
}
</script>

<style lang="scss">
.window-cleaning {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 36px;
  color: $black;
}
</style>
