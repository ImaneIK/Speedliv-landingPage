<template>
  <div class="mb-24 xl:px-24">
    <div class="p-12">
      <p class="text-xs font-extrabold text-red-400 mb-4">BEST SOFTWARE</p>
      <p class="text-3xl font-light">Why Choose Us</p>
    </div>

    <div class="plans lg:px-18 xs:px-8 grid xs:grid-col-1 lg:grid-cols-3 gap-8">
      <div
        class="rounded-lg relative"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{
          opacity: 1,
          x: 0,
          transition: { type: 'spring', stiffness: '100', delay: 300 },
        }"
      >
        <img src="../assets/mng.png" />
        <p style="font-size: 20px" class="font-light">User-friendly UI</p>
        <div class="font-light text-sm mt-2 opacity-50">
          We provide elegant and modern design.We believe that good and easy to use UI is
          essential for a happy and productive life. That's why we provide high-quality
          user interfaces for a smooth process.
          <!--<span> improving the customer experience. Whether you're looking to streamline your delivery process or just get a better understanding of how your deliveries are performing, SpeedLiv has the tools you need.</span>-->
        </div>
      </div>

      <div
        class="rounded-lg"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: '100', delay: 200 },
        }"
      >
        <img src="../assets/auto.png" />
        <p style="font-size: 20px" class="font-light">High end analyzing</p>
        <div class="font-light text-sm mt-2 opacity-50">
          We offer our clients the most valuable data analysis and interpretation
          available in order to help them make informed decisions. Our software is
          designed for busy professionals who want to get the most out of their time.
          <!--<span> improving the customer experience. Whether you're looking to streamline your delivery process or just get a better understanding of how your deliveries are performing, SpeedLiv has the tools you need.</span>-->
        </div>
      </div>

      <div
        class="rounded-lg"
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :visible="{
          opacity: 1,
          x: 0,
          transition: { type: 'spring', stiffness: '100', delay: 300 },
        }"
      >
        <img src="../assets/meeting.png" />
        <p style="font-size: 20px" class="font-light">Our dedicated support</p>
        <div class="font-light text-sm mt-2 opacity-50">
          from simple questions to more complicated issues. We're here to help you with
          whatever you need, 24/7. Plus, our easy-to-use interface makes getting the
          support you need faster and easier than ever before.
          <!--<span> improving the customer experience. Whether you're looking to streamline your delivery process or just get a better understanding of how your deliveries are performing, SpeedLiv has the tools you need.</span>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "why_choose_us",
};
</script>
