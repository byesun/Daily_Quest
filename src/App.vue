<script setup>
import Header from '@/components/AppHeader.vue'
import Footer from '@/components/AppFooter.vue'
</script>

<template>
  <div>
    <div>
      <Header />
    </div>
  </div>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
  <div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
