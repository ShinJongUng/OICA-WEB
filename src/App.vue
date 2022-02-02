<template>
  <Header />
  <router-view v-slot="{ Component }" class="router">
  <transition name="fade" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
  @import "~/scss/main.scss";

  .router{
    padding-bottom: 100px;
  }
  .fade-enter-active,
  .fade-leave-active {
  transition: opacity 0.5s ease;
  }


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>