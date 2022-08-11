<template>
  <section class="bg-blue-50 my-12 py-4" id="about">
    <div class="xs:px-6 xs:py-8 relative mx-auto text-center">
      <p class="text-xs font-extrabold text-red-400 mb-4">ABOUT US</p>
      <p class="text-3xl font-light">What is SpeedLiv exactly?</p>
    </div>

    <div
      class="relative flex xs:flex-col 2xl:flex-row justify-center 2xl:px-36 2xl:mb-12 my-4 mx-auto pb-8"
    >
      <div class="xs:w-5/6 sm:h-96 2xl:h-max mx-auto my-4 2xl:w-1/2">
        <iframe
          class="h-full w-full"
          src="https://www.youtube.com/embed/dKmnWzcR9dw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div
        class="tracking-wide text xs:text-sm 2xl:text-base 2xl:text-left xs:text-center xs:mx-auto 2xl:mx-12 2xl:w-1/2 xs:px-12 xs:mt-8 2xl:mt-0"
      >
        <p>
          SpeedLiv is an innovative and efficient SaaS that helps e-commerce businesses to
          manage the entire delivery process in a simple and intuitive way. Thanks to
          SpeedLiv, online sellers can focus on their core business and leave the
          management of carriers and deliveries to our software. SpeedLiv offers a fast,
          reliable and secure service, which guarantees an optimal customer experience.
        </p>
        <p>
          E-commerce businesses face many challenges when it comes to delivery. They need
          to find the right carrier, make sure the order is delivered on time, and invoice
          the customer correctly. SpeedLiv is a software solution that was created to help
          E-commerce businesses manage all of their delivery needs. We offer a platform
          where businesses can compare prices and services from different carriers, get
          real-time updates on the status of their orders.
        </p>
        <br />
        <button class="text-white px-4 py-2 rounded-3xl bg-indigo-500">
          Become a contributor
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "aboutSection",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Roboto:wght@300;400&display=swap");
.text {
  font-family: "Poppins", sans-serif;
}

/* 
.text{
    
} */
</style>
