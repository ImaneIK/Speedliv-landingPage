<template>
  <advertisement></advertisement>
</template>

<script>
import advertisement from '../components/adv.vue'


export default {
 // eslint-disable-next-line vue/multi-word-component-names
 name: 'advertisement',
  props: {
    msg: String
  },

    components: {
    advertisement,
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

