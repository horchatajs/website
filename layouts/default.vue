<template>
  <div class="p-8 h-screen bg-grey-lightest">
    <div class="flex flex-col h-full">
      <!-- Top Level -->
      <div class="flex justify-between items-center mb-6">
        <img class="h-10" src="~/assets/images/full-logo.svg" alt="full-logo">
        <div>Menu</div>
      </div>
      <!-- NavBar -->
      <nav-bar/>
      <!-- Content -->
      <nuxt/>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
</style>
