<template>
  <main class="main">
    <MainBanner />
    <OurBenefits />
    <HowWeDoClean />
    <OrderButton />
  </main>
</template>

<script>
import MainBanner from '@/components/home/MainBanner'
import OurBenefits from '@/components/home/OurBenefits'
import HowWeDoClean from '@/components/home/howWeDoClean/HowWeDoClean'
import OrderButton from '@/components/home/OrderButton'

export default {
  components: {
    MainBanner,
    OurBenefits,
    HowWeDoClean,
    OrderButton
  }
}
</script>

<style lang="scss">
  .main {
    position: relative;
  }
</style>
