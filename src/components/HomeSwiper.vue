<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :autoplay="{
      delay: 25000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    effect="fade"
    :slides-per-view="1"
    :space-between="50"
    :speed="1000"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide>
      <img
        src="../assets/swiper/swiper1.png"
        alt=""
        class="swiper-img" />
    </swiper-slide>
    <swiper-slide>
      <img
        src="../assets/swiper/swiper2.png"
        alt=""
        class="swiper-img" />
    </swiper-slide>
    ...
  </swiper>
</template>
<script>
 


  import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay  } from 'swiper';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/effect-fade';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, EffectFade, Autoplay],
      };
    },
    methods: {
      
    }
  };
</script>

<style scoped lang="scss">
  .swiper-img{
    width: 100%;
    opacity: 100%;
  }
</style>