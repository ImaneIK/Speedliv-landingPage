<template>
  <div class="heading relative h-max justify-center max-w-max" id="home">
    <div class="floating floating_box absolute left-96 lg:top-20 w-24 h-auto z-0">
      <img src="../assets/star.png" />
    </div>

    <div
      style="left: 41rem"
      class="floating floating_pin absolute xs:top-0 lg:top-36 w-24 h-auto z-0"
    >
      <img src="../assets/Cloud.png" />
    </div>

    <div class="heading_image xl:w-1/2 mb-4 z-10">
      <img src="../assets/delivery_man.png" />
    </div>

    <div class="floating floating_present absolute bottom-0 left-48 w-20 h-auto z-0">
      <img src="../assets/Diagram.png" />
    </div>

    <div
      style="left: 41rem"
      class="floating floating_sandglass absolute bottom-48 w-20 h-auto z-0"
    >
      <img src="../assets/Clock.png" />
    </div>

    <div
      style="left: 60rem"
      class="floating floating_pin absolute bottom-36 w-24 h-auto z-0"
    >
      <img src="../assets/bolt.png" />
    </div>

    <div class="heading_text xl:w-1/2 lg:p-12 xs:px-4 z-10">
      <div class="xl:text-xs xs:text-sm text-red-400 font-bold mb-4">WE DELIVER</div>
      <h1 class="xl:text-5xl xs:text-3xl mb-8">
        SpeedLiv - Your one-stop E-Commerce business services provider
      </h1>
      <h2 class="text-xl mb-4">24h A Day</h2>
      <h3 class="text-lg font-light opacity-50 mb-4">
        SpeedLi provides shipping, warehouse and call center services so you can focus on
        what you're good at - making sales and growing your business
      </h3>

      <div class="flex flex-row inline-flex flex-wrap">
        <div class="mr-4">
          <button class="text-white px-4 py-2 rounded-3xl bg-indigo-500">
            Get Started
          </button>
        </div>
        <div>
          <a href="#about">
            <button class="text-white px-4 py-2 rounded-3xl bg-green-400">
              90s Explainer
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "heading",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Roboto:wght@300;400&display=swap");
* {
  font-family: "Poppins", sans-serif;
}

.floating {
  animation-name: floating;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.floating_pin {
  animation-duration: 2.5s;
}

.floating_box {
  animation-duration: 3s;
}

.floating_present {
  animation-duration: 3.5s;
}

.floating_sandglass {
  animation-duration: 3.7s;
}

@media screen and (max-width: 810px) {
  .floating {
    display: none;
  }
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
</style>
