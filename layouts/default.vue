<template>
  <div class="p-8 h-screen bg-grey-lightest">
    <!-- Toolbar -->
    <div class="flex justify-between items-center mb-6">
      <img class="h-10" src="~/assets/images/full-logo.svg" alt="full-logo">
      <div class="menu-button">
        Menu
      </div>
    </div>
    <!-- Content -->
    <div class="flex mt-16">
      <!-- NavBar -->
      <nav-bar />
      <!-- Main Content -->
      <nuxt />
      <!-- Contact Section -->
      <div class="lg:inline hidden">
        contactos
      </div>
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

<style scoped>
@media (min-width: 1024px) {
  .menu-button {
    display: none;
  }
}
</style>
