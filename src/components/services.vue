<template>
  <section class="bg-blue-50 my-16 lg:px-20" id="services">
    <div class="fade-left p-12">
      <div class="lg:p-12">
        <p class="text-xs font-extrabold text-red-400 mb-4">OUR SERVICES</p>
        <p class="text-3xl font-light">We help your business grow faster.</p>
        <p class="font-light m-4">
          We provide a wide range of services so you can focus on what you're good at -
          making sales and growing your business
        </p>
      </div>

      <div class="grid xl:grid-cols-3 gap-2 xs:grid-cols-1 text-left">
        <div
          class="bg-white rounded-xl p-8 lg:m-2 xs:my-2"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: '100', delay: 100 },
          }"
        >
          <img src="https://img.icons8.com/fluency/96/000000/warehouse-1.png" />
          <br /><span class="text-xl">Warehouse Management</span> <br />
          <div class="font-light text-sm mt-2">
            We help you manage your warehouse needs. From inventory and order fulfillment
            to logistics and delivery, we have you covered. With our fast, reliable
            service, you can focus on what's important...
          </div>
          <br /><a class="font-ligh text-red-400 text-xs">Read more -></a>
        </div>

        <div
          class="bg-white rounded-xl p-8 lg:m-2 xs:my-2"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: '100', delay: 200 },
          }"
        >
          <img
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/75/000000/external-headset-home-based-business-flaticons-flat-flat-icons.png"
          />
          <br /><span class="text-xl">Call Center</span> <br />
          <div class="font-light text-sm mt-2">
            We offer a call center management service that helps businesses and
            organizations to more efficiently manage their call center operations. By
            using our proprietary software, businesses are able to ...
            <!--<span>optimize agent schedules , track order status, and more effectively manage customer interactions. This allows businesses to improve customer satisfaction while also reducing costs.</span>-->
          </div>
          <br /><a class="font-ligh text-red-400 text-xs">Read more -></a>
        </div>

        <div
          class="bg-white rounded-xl p-8 lg:m-2 xs:my-2"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: '100', delay: 300 },
          }"
        >
          <img src="https://img.icons8.com/fluency/75/000000/in-transit.png" />
          <br /><span class="text-xl">Delivery</span> <br />
          <div class="font-light text-sm mt-2">
            We provide a delivery management service that helps businesses manage and
            optimize their delivery process. Using our web-based software, businesses are
            able to save time and money while ...
            <!--<span> improving the customer experience. Whether you're looking to streamline your delivery process or just get a better understanding of how your deliveries are performing, SpeedLiv has the tools you need.</span>-->
          </div>
          <br /><a class="font-ligh text-red-400 text-xs">Read more -></a>
        </div>
      </div>
      <button class="text-white px-4 py-2 mt-8 rounded-3xl bg-indigo-500">
        Join SpeedLiv Now
      </button>
    </div>
  </section>
</template>

<script>
// import { useMotion } from '@vueuse/motion'

export default {
  name: "vision",

  // //   methods:{

  // //     reveal() {
  // //   var reveals = document.querySelectorAll(".reveal");

  // //   for (var i = 0; i < reveals.length; i++) {
  // //     var windowHeight = window.innerHeight;
  // //     var elementTop = reveals[i].getBoundingClientRect().top;
  // //     var elementVisible = 150;

  // //     if (elementTop < windowHeight - elementVisible) {
  // //       reveals[i].classList.add("active");
  // //     } else {
  // //       reveals[i].classList.remove("active");
  // //     }
  // //   }
  // // }

  // // window.addEventListener("scroll", reveal);

  //     }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Roboto:wght@300;400&display=swap");
section {
  font-family: "Poppins", sans-serif;
}

/* svg{
    fill: rgb(255,127,92);
} */

/* 
.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}
.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}
.active.fade-left {
  animation: fade-left 1s ease-in;
}
.active.fade-right {
  animation: fade-right 1s ease-in;
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
} */
</style>
