<template>
  <!-- //xs:w-screen -->
  <div
    class="relative flex md:flex-row xs:flex-col justify-center xs:mx-auto lg:mx-24 my-24 md:divide-x md:divide-solid"
  >
    <div
      class="xs:text-center md:text-left xs:w-5/6 xs:mx-auto lg:w-1/2 lg:mx-12 xs:mb-24"
    >
      <div class="my-4">
        <h1 class="text-2xl font-bold my-6">Get in touch</h1>
        <h2 class="text-lg font-bold my-2">Send a message</h2>
        <span class="text-md font-light my-2 opacity-60"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in semper orci.
        </span>
      </div>

      <div class="relative">
        <form @submit.prevent="sendEmail">
          <div class="flex xs:flex-col md:flex-row justify-center text-left">
            <input
              name="from_name"
              v-model="from_name"
              style="border-bottom: 2px solid #0f00ff"
              class="bg-transparent xs:w-full md:w-1/2 md:ml-2 my-4"
              placeholder="Name"
            />
            <input
              v-model="from_email"
              name="from_email"
              style="border-bottom: 2px solid #0f00ff"
              class="bg-transparent xs:w-full md:w-1/2 md:ml-2 my-4"
              type="email"
              placeholder="Email"
            />
          </div>
          <textarea
            name="message"
            v-model="message"
            style="border-bottom: 2px solid #0f00ff"
            class="w-full pr-4 my-4"
            rows="4"
            placeholder="Message"
          ></textarea>
          <div class="absolute xs:w-full md:w-max md:right-0">
            <button
              class="xs:w-full md:w-max bg-indigo-500 px-4 py-2 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    <div
      class="xs:mx-auto md:mx-12 md:px-12 xs:w-5/6 lg:w-1/2 xs:text-center md:text-left"
    >
      <div class="m-4">
        <span class="text-lg font-bold my-2">Call us</span><br />
        <span class="text-sm font-light opacity-60"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in semper orci. </span
        ><br />
        <span class="text-xs font-bold text-red-400">0661372852</span>
      </div>
      <div class="m-4">
        <h1 class="text-lg font-bold my-2">Visit us</h1>
        <span class="text-sm font-light opacity-60"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in semper orci. </span
        ><br />
        <span class="text-xs font-bold text-red-400"
          >Technopark 1ème etage Bureau TA121 Bab Al Madina Qr، Agadir 80000</span
        >
      </div>
      <div class="m-4">
        <h1 class="text-lg font-bold my-2">Live chat</h1>
        <span class="text-sm font-light opacity-60"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in semper orci. </span
        ><br />
        <span class="text-xs font-bold text-red-400">https://www.storeino.com/fr</span>
      </div>
    </div>
  </div>

  <div class="flex m-24 justify-center mx-auto">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.159646535511!2d-9.530724184845015!3d30.4032120817532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7e405935d87%3A0x6952cec56744ae0!2sStoreino!5e0!3m2!1sfr!2sma!4v1658160837627!5m2!1sfr!2sma"
      width="80%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <!-- here -->

  <div
    class="m-36 flex flex-row justify-center text-left lg:mx-24 md:divide-x md:divide-solid"
  >
    <div class="px-8">
      <span class="text-xs font-black text-red-400">FAQ</span><br />
      <span class="text-4xl font-black">Frequently asked questions.</span>
    </div>

    <div>
      <div class="m-8">
        <h1 class="text-md font-bold my-2">How can we help you?</h1>
        <span class="text-sm font-light opacity-60"
          >SpeedLiv provides excellent client support for any issues you may have while
          using the product.</span
        ><br />
      </div>

      <!-- the accordion -->
      <div class="container m-8">
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
import emailjs from "emailjs-com";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ContactView",
  props: {
    msg: String,
  },

  components: {},

  data() {
    return {
      from_name: "",
      from_email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_2wqyw4j",
          "template_8so6cuj",
          e.target,
          "UgrE56x2fPhCSxUgK",
          {
            from_name: this.from_name,
            message: this.meessage,
            from_email: this.from_email,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.from_name = "";
      this.from_email = "";
      this.message = "";
    },
  },
};
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

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Roboto:wght@300;400&display=swap");
h1,
h2,
span {
  font-family: "Poppins", sans-serif;
}

.accordions {
  border-radius: 8px;
  overflow: hidden;
}

.accordion {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px #47b5ff solid;
}

.acc-label {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  padding: 0.7rem;
  cursor: pointer;
}

acc-label:hover {
  background: #47b5ff;
}

.acc-label::after {
  content: ">";
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.4s ease;
}

.acc-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background-color: #dff6ff;
  transition: all 0.4s ease;
}

.input-tst {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.input-tst:checked + .acc-label::after {
  transform: rotate(90deg);
}

.input-tst:checked ~ .acc-content {
  max-height: 100vh;
  padding: 1em;
}
</style>
