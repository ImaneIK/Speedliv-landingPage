<template>
  <div class="app xs:w-screen overflow-x-hidden">
    <navigation/>
     
    <router-view></router-view>

    <Footer/>
  </div>
</template>

<script>
import navigation from "./components/Navigation.vue"
import Footer from "./components/footer.vue"
export default {
  name:"App",
  components:{
    navigation,
    Footer
  }
};
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Roboto:wght@300;400&display=swap');
#app {

    font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 100px; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


</style>
