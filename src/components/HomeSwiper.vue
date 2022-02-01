<template>
  <div class="container-md">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      effect="fade"
      :slides-per-view="1"
      :speed="1200"
      navigation
      :parallax="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide class="wrap-swiper">
        <div
          class="title"
          data-swiper-parallax="-200">
          Becoming One in Love<br />
          Growing Leaders<br />
          Helping People to Serve God<br />
        </div>
        <div
          class="subtitle"
          data-swiper-parallax="-100">
          We Are OICA
        </div>
        <img
          src="../assets/swiper/swiper1.png"
          alt=""
          class="swiper-img" />
      </swiper-slide>
      <swiper-slide class="wrap-swiper">
        <div
          class="title"
          data-swiper-parallax="-200">
          사랑으로 하나되는 학교 <br />
          리더를 세워가는 학교 <br />
          섬김으로 봉사하는 학교 <br />
        </div>
        <div
          class="subtitle"
          data-swiper-parallax="-300">
          우리는 OICA입니다
        </div>
        <img
          src="../assets/swiper/swiper2.png"
          alt=""
          class="swiper-img" />
      </swiper-slide>
      <swiper-slide class="wrap-swiper">
        <div
          class="title"
          data-swiper-parallax="-200">
          Growing Global Leaders<br />
          in God's Words. 
        </div>
        <div
          class="subtitle"
          data-swiper-parallax="-300">
          We Are OICA
        </div>
        <img
          src="../assets/swiper/swiper3.png"
          alt=""
          class="swiper-img" />
      </swiper-slide>
      <swiper-slide class="wrap-swiper">
        <div
          class="title"
          data-swiper-parallax="-200">
          하나님 말씀 안에서<br />
          글로벌 리더 양성
        </div>
        <div
          class="subtitle"
          data-swiper-parallax="-300">
          우린 OICA입니다
        </div>
        <img
          src="../assets/swiper/swiper4.png"
          alt=""
          class="swiper-img" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
 


  import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax } from 'swiper';
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
        modules: [Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax],
      };
    },
    methods: {
      
    }
  };
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comforter&family=Noto+Sans+KR:wght@700&family=Roboto:wght@700&display=swap');
 
 .wrap-swiper{
    position: relative;
    font-family: 'Roboto','Noto Sans KR', sans-serif;
    img{
      filter: brightness(40%);
      z-index: 2;
      width: 1320px;
    }
    .title{
      font-size: 45px;
      position: absolute;
      z-index: 1;
      top: 30%;
      left: 10%;
      color:white;
    }
    .subtitle{
      font-size: 30px;
      position: absolute;
      z-index: 1;
      bottom: 20%;
      left: 10%;
      color:white;
    }
  }
</style>