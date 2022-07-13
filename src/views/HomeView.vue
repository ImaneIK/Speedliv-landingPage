<template>
  <div class="home">

    <Heading></Heading>
    
    <services></services>
    
    <howItWorks></howItWorks>

    <advertisement></advertisement>

    <mobileApp></mobileApp>
    <vision></vision>
    <forum></forum>

   
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from '../components/heading.vue'
import vision from '../components/vision.vue'
import services from '../components/services.vue'
import howItWorks from '../components/how_it_works.vue'
import mobileApp from '../components/mobile_app.vue'
import forum from '../components/forum.vue'
import advertisement from '../components/adv.vue'


export default {
  name: 'HomeView',
  components: {
    Heading,
    vision,
    services,
    howItWorks,
    advertisement,
    mobileApp,
    forum,
  }
}
</script>
