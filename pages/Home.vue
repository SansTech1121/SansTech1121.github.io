<template>
  <title>HOME</title>
  <div >
    <v-carousel height="auto" cycle show-arrows="hover">
  <v-carousel-item cover>
  <img class="ImgBox" src="../assets/img/ImageSlider/PIC (1).jpg">
  </v-carousel-item>

  <v-carousel-item cover>
  <img class="ImgBox" src="../assets/img/ImageSlider/PIC (2).jpg">
  </v-carousel-item>

  <v-carousel-item cover>
  <img class="ImgBox" src="../assets/img/ImageSlider/PIC (3).jpg">
  </v-carousel-item>

  <v-carousel-item cover>
  <img class="ImgBox" src="../assets/img/ImageSlider/PIC (4).jpg">
  </v-carousel-item>

</v-carousel>
    </div>
</template>

<script >
      definePageMeta({
        layout:'sidebar'
    })
  
</script>

<style >
@import '~/assets/css/Home.css';
@import '~/assets/css/FontStyle.css';
</style>