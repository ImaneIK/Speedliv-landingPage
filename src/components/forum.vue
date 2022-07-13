<template>
        <section class="forum-sec bg-blue-100 my-16" >
      <div class="forum flex md:flex-row xs:flex-col p-16 2xl:mx-32" >
        <div class="forum_text text-left basis-1/3 my-auto mr-8 m-4 xs:w-full ">
          <h2 class="text-4xl mb-4">Anything on your mind?<br> We got you!</h2>
          <h3 class="text-xl mb-4">Mauris condimentum blandit tellus ac maximus. Maecenas vehicula lacinia justo, vitae tempus ligula rutrum. Maecenas vehicula la</h3>
        </div>

        <div class="my-auto basis-2/3 w-full">
          <input class="px-6 py-4 rounded-lg my-2 w-full" placeholder="Email Address"/><br>
          <input class="px-6 py-4 rounded-lg my-2 w-full" placeholder="Password"/><br>
          <button class="py-4 rounded-lg bg-red-500 text-white my-2 w-full"><b>SUBMIT</b></button>
        </div>
      </div>
    </section>
</template>


<script>



export default {
  name: 'forum',
}
</script>