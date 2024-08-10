<template>
  <div class="home">
<<<<<<< HEAD
    <Heading></Heading>
    <services></services>
    <why_choose_us></why_choose_us>
    <aboutSection></aboutSection>
    <!-- <howItWorks></howItWorks> -->

    <!-- <advertisement></advertisement> -->
    <plans></plans>
    <mobileApp></mobileApp>

    <!-- <vision></vision> -->
    <slider></slider>
    <forum></forum>
    <faq></faq>
    <googleMaps></googleMaps>
=======

    <Heading></Heading>
    
    <howItWorks></howItWorks>

    <!-- <advertisement></advertisement> -->

    <mobileApp></mobileApp>
    <forum></forum>

   
>>>>>>> e4d9eaa9e89cbcc4b400fd09d4ce9463f44bcccc
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import Heading from "../components/heading.vue";
import why_choose_us from "../components/why_choose_us.vue";
// import vision from "../components/vision.vue";
import services from "../components/services.vue";
import howItWorks from "../components/how_it_works.vue";
import aboutSection from "../components/aboutSection.vue";
import plans from "../components/plans.vue";
import mobileApp from "../components/mobile_app.vue";
import forum from "../components/forum.vue";
// import advertisement from "../components/adv.vue";
import slider from "../components/slider.vue";
import googleMaps from "../components/googleMaps.vue";
import faq from "../components/faq.vue";

export default {
  name: "HomeView",
  components: {
    Heading,
    why_choose_us,
    aboutSection,
    // vision,
    services,
    howItWorks,
    // advertisement,
    plans,
    slider,
    mobileApp,

    googleMaps,
    forum,
    faq,
  },
};
=======
import Heading from '../components/heading.vue'
import howItWorks from '../components/how_it_works.vue'
import mobileApp from '../components/mobile_app.vue'
import forum from '../components/forum.vue'
import advertisement from '../components/adv.vue'


export default {
  name: 'HomeView',
  components: {
    Heading,
    howItWorks,
    advertisement,
    mobileApp,
    forum,
  }
}
>>>>>>> e4d9eaa9e89cbcc4b400fd09d4ce9463f44bcccc
</script>
