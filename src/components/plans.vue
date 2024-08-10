<template>
  <div class="mb-24 xl:px-24">
    <div class="p-12">
      <p class="text-xs font-extrabold text-red-400 mb-4">OUR PLANS</p>
      <p class="text-3xl font-light">Packages to suit your plans</p>
      <p class="font-light m-4">
        We provide a wide range of services so you can focus on what you're good at -
        making sales and growing your business
      </p>
    </div>

    <div class="plans xs:px-8 lg:px-18 grid xs:grid-col-1 lg:grid-cols-3 gap-4">
      <div
        class="plan relative lg:mt-6"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: '100', delay: 100 },
        }"
      >
        <h1 class="mt-6 font-semibold text-lg">Basic</h1>
        <p style="font-size: 25px" class="font-bold">123$</p>
        <span style="font-size: 15px">Per Month</span><br /><br />
        <span> &#x2714; Data Source</span><br />
        <span> &#x2714; personal Licence</span><br />
        <span> &#x2714; Max 12 Hours</span><br />
        <span> &#x2714; x5 Revisons</span><br />
        <button class="my-4 py-2 px-4 bg-indigo-500 rounded-lg text-white">
          Buy Now
        </button>
      </div>

      <div
        class="plan bg-indigo-500 text-white lg:mb-6"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: '100', delay: 200 },
        }"
      >
        <h1 class="mt-4 font-semibold text-lg">Standard</h1>
        <p style="font-size: 25px" class="font-bold">175$</p>
        <span style="font-size: 15px">Per Month</span><br /><br />
        <span> &#x2714; Data Source</span><br />
        <span> &#x2714; personal Licence</span><br />
        <span> &#x2714; Max 12 Hours</span><br />
        <span> &#x2714; x5 Revisons</span><br />
        <button class="shadow-lg my-4 py-2 px-4 bg-white rounded-lg text-indigo-500">
          Buy Now
        </button>
      </div>

      <div
        class="plan mt-6"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: '100', delay: 300 },
        }"
      >
        <h1 class="lg:mt-6 font-semibold text-lg">Business</h1>
        <p style="font-size: 25px" class="font-bold">210$</p>
        <span style="font-size: 15px">Per Month</span><br /><br />
        <span> &#x2714; Data Source</span><br />
        <span> &#x2714; personal Licence</span><br />
        <span> &#x2714; Max 12 Hours</span><br />
        <span> &#x2714; x5 Revisons</span><br />
        <button class="my-4 py-2 px-4 bg-indigo-500 rounded-lg text-white">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plans",
};
</script>
