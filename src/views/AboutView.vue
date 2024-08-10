<template >
<div>
  <h1>About Us</h1>
  <aboutSection></aboutSection>
</div>
  
</template>

<script>
import aboutSection from '../components/aboutSection.vue'



export default {
 // eslint-disable-next-line vue/multi-word-component-names
 name: 'AboutView',
  props: {
    msg: String
  },

    components: {
    aboutSection,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}







</style>

