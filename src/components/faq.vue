<template>
  <!-- the accordion -->
  <div
    class="my-36 flex lg:flex-row xs:flex-col justify-center xs:text-center lg:text-left lg:divide-x lg:divide-solid xs:mx-auto lg:mx-48"
  >
    <div class="xl:w-2/5 lg:mr-8">
      <span class="text-xs font-black text-red-400">FAQ</span><br />
      <span class="text-4xl font-black">Frequently asked questions.</span>
    </div>

    <div class="xl:w-3/4">
      <div class="m-8">
        <h1 class="text-md font-bold my-2">How can we help you?</h1>
        <span class="text-sm font-light opacity-60"
          >SpeedLiv provides excellent client support for any issues you may have while
          using the product.</span
        ><br />
      </div>

      <!-- the accordion -->
      <div class="container lg:m-8 xs:mx-auto">
        <div class="accordions">
          <div class="accordion">
            <input class="input-tst" type="checkbox" id="first" />
            <label class="acc-label" for="first"
              ><span class="font-bold">So what is SpeedLiv exactly?</span><br
            /></label>
            <div class="acc-content">
              SpeedLiv is an innovative and efficient SaaS that helps e-commerce
              businesses to manage the entire delivery process in a simple and intuitive
              way. Thanks to SpeedLiv, online sellers can focus on their core business and
              leave the management of carriers and deliveries to our software. SpeedLiv
              offers a fast, reliable and secure service, which guarantees an optimal
              customer experience.
            </div>
          </div>

          <div class="accordion">
            <input class="input-tst" type="checkbox" id="second" />
            <label class="acc-label" for="second"
              ><span class="font-bold">Do you provide customer support?</span><br
            /></label>
            <div class="acc-content">
              We pride ourselves on providing unrivaled client support. Our team of
              experts are available 24/7 to help you with any question or issue you may
              have. No question or issue is too big or too small for our team of experts.
              We're here to help you grow your business and make online selling easy.
            </div>
          </div>

          <div class="accordion">
            <input class="input-tst" type="checkbox" id="third" />
            <label class="acc-label" for="third"
              ><span class="font-bold"
                >Does the subscription come with a documentation?</span
              ><br
            /></label>
            <div class="acc-content">text...</div>
          </div>

          <div class="accordion">
            <input class="input-tst" type="checkbox" id="fourth" />
            <label class="acc-label" for="fourth"
              ><span class="font-bold"
                >Lorem ipsum dolor consectetur adipiscing elit?</span
              ><br
            /></label>
            <div class="acc-content">text...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "faq",
};
</script>
