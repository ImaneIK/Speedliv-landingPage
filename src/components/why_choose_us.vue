<template>

        <div class="mb-24 xl:px-24">

            <div class="p-12">
            <p class="text-xs font-extrabold text-red-400 mb-4">BEST SOFTWARE</p>
            <p class="text-3xl font-light">Why Choose Us</p>
            </div>

            <div class="plans px-24 grid xs:grid-col-1 lg:grid-cols-3  gap-8" >
            
            <div class="rounded-lg relative "  v-motion :initial="{ opacity: 0,x: -100,  }" :visible="{ opacity: 1,  x: 0, transition: {type: 'spring', stiffness: '100',delay: 300, },}" >
                <img src="../assets/mng.png" />
                <p style="font-size: 20px;" class=" font-light">Elegant and modern design</p>
            </div>

            <div class="rounded-lg "  v-motion :initial="{ opacity: 0,y: 100,  }" :visible="{ opacity: 1,  y: 0, transition: {type: 'spring', stiffness: '100',delay: 200, },}">
                <img src="../assets/auto.png" />
                <p style="font-size: 20px;" class=" font-light">High end analyzing</p>
            </div>

            <div class="rounded-lg "  v-motion :initial="{ opacity: 0,x: 100,  }" :visible="{ opacity: 1,  x: 0, transition: {type: 'spring', stiffness: '100',delay: 300, },}">
                <img src="../assets/meeting.png" />
                <p style="font-size: 20px;" class=" font-light">Our dedicated support</p>
            </div>

            </div>

        </div>
</template>

<script>



export default {
  name: 'why_choose_us',
  
}
</script>
