<template>
  <div class="after-repair">
    <h1>Hello from after repair page</h1>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'after repair page'
    }
  }
}
</script>

<style lang="scss">
.after-repair {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 36px;
  color: $black;
}
</style>
