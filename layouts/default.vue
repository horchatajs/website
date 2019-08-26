<template>
  <div class="p-8 h-screen bg-grey-lightest max-w-7xl mx-auto">
    <!-- Toolbar -->
    <div class="flex justify-between items-center mb-6">
      <img class="h-10" src="~/assets/images/full-logo.svg" alt="full-logo">
      <responsive-menu class="inline lg:hidden" />
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
import ResponsiveMenu from '../components/ResponsiveMenu'

export default {
  components: {
    NavBar,
    ResponsiveMenu
  }
}
</script>
