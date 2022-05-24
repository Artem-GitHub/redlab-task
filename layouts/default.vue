<template>
  <div class="main-content">
    <BaseHeader />
    <Nuxt />
  </div>
</template>

<script>
import BaseHeader from '@/components/header/BaseHeader'

export default {
  components: { BaseHeader }
}
</script>

<style lang="scss">
html, body {
  font-family: $tttravels-font;
  font-weight: 400;
}

.main-content {
  width: 100%;
  min-height: 100vh;
  position: relative;
}
</style>
