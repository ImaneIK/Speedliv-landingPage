<template>
  <div class="xs:mx-24 my-8">
    <span class="text-sm font-extrabold text-red-400">TESTIMONIALS</span><br />
    <span class="text-2xl font-light">Check what our clients are saying</span>
  </div>
  <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="mb-8"><vision1></vision1></swiper-slide>
    <swiper-slide class="mb-8"><vision2></vision2></swiper-slide>
    <swiper-slide class="mb-8"><vision3></vision3></swiper-slide>
    <swiper-slide class="mb-8"><vision4></vision4></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import vision1 from "./visions/vision1.vue";
import vision2 from "./visions/vision2.vue";
import vision3 from "./visions/vision3.vue";
import vision4 from "./visions/vision4.vue";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default {
  name: "slider",
  components: {
    Swiper,
    SwiperSlide,
    vision1,
    vision2,
    vision3,
    vision4,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style>
.swiper {
  margin-top: 20px;
  width: 80%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
