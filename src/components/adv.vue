<template>
  <!-- <div
    class="about w-2/3 xs:w-5/6 lg:w-1/2 md:h-96 mx-auto my-24 md:scale-125 xs:scale-50"
  >
    <div class="transbox flex justify-center h-full text-white">
      <div class="py-12 transform-y-1/2 text-center">
        <p class="text-3xl px-16 pt-2" style="">Push your product to next level</p>
        <br />
        <p class="xs:text-md xl:text-lg px-12 pt-4" style="">
          We help e-commerce businesses to manage the entire delivery process in a simple
          and intuitive way. Thanks to SpeedLiv, online sellers can focus on their core
          business and leave the management of carriers and deliveries to our software.
          SpeedLiv offers a fast, reliable and secure service, which guarantees an optimal
          customer experience.
        </p>
        <br />
        <button class="text-md mx-auto px-4 py-2 m-2">Get Started</button>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "advertisement",
  props: {
    msg: String,
  },
};
</script>

<style>
.about {
  position: relative;
  background: url("../assets/section.jpg") no-repeat center;
  height: 100%;
  background-size: cover;
  border-radius: 32px;
}

.transbox {
  background-color: rgba(22, 1, 44, 0.45);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 32px;
}

.transbox button {
  border-radius: 15px;
  background-color: rgb(255, 127, 92);
}

/*
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

.about{
  width: 800px;
  height: 500px;
  margin: 100px;
  display: flex;
  left: 16%;
  top: 5%;
  background: url("../assets/section.jpg")no-repeat center;
  background-size: cover; 
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  margin: 6rem auto;
} */
</style>
