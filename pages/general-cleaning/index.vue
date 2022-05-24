<template>
  <div class="general-cleaning">
    <h1>Hello from after general cleaning</h1>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'general cleaning page'
    }
  }
}
</script>

<style lang="scss">
.general-cleaning {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 36px;
  color: $black;
}
</style>
