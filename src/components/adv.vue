<template>
      <div class="about">
  <div class="transbox">
    <p style="font-size: 42px;">Push your product to next level.</p><br>
    <p style="font-size: 20px;">Mauris condimentum blandit tellus ac maximus. Maecenas vehicula lacinia justo, vitae tempus ligula rutrum. </p><br>
    <button>Get Started</button>
  </div>
  </div>
</template>


<script>
export default {
 // eslint-disable-next-line vue/multi-word-component-names
 name: 'advertisement',
  props: {
    msg: String
  }
}
</script>


<style>
    .transbox {
  background-color: rgba(22, 1, 44, 0.45);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  padding: 20px;
  margin: 0;
  font-family: 'arial';
  color: aqua;
  height: 500px;
  border-radius: 32px;
}

.transbox p{
  position: relative;
  top: 35%;
}

.transbox button{
  position: relative;
  top: 35%;
  color:white; 
  font-size: 16px; 
  padding:10px; 
  width:165px; 
  background-color: rgb(255,127,92); 
  border-style: none; 
  border-radius: 32px;
}
</style>