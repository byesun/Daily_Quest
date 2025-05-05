<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div>
    <div>
      <Header/>
    </div>
  </div>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
  <div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>

</style>
