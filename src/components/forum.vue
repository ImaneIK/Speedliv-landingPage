<template>
  <section class="forum-sec bg-blue-100 my-16">
    <div class="forum flex md:flex-row xs:flex-col p-16 2xl:mx-32">
      <div class="forum_text text-left basis-1/3 my-auto mr-8 m-4 xs:w-full">
        <h2 class="text-4xl mb-4">
          Anything on your mind?<br />
          We got you!
        </h2>
        <h3 class="text-xl mb-4">
          No question or issue is too big or too small for our team of experts. We're here
          to help you grow your business and make online selling easy.
        </h3>
      </div>

      <div class="my-auto basis-2/3 w-full">
        <form @submit.prevent="sendEmail">
          <input
            v-model="from_email"
            name="from_email"
            class="px-6 py-4 rounded-lg my-2 w-full"
            type="email"
            placeholder="Email Address"
          /><br />
          <input
            name="message"
            v-model="message"
            class="px-6 py-4 rounded-lg my-2 w-full"
            placeholder="Message"
          /><br />
          <button class="py-4 rounded-lg bg-red-500 text-white my-2 w-full">
            <b>SUBMIT</b>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "forum",

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
