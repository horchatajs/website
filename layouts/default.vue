<template>
  <div class="p-8 h-screen bg-grey-lightest max-w-7xl mx-auto">
    <!-- Toolbar -->
    <div class="flex justify-between items-center mb-6">
      <nuxt-link to="/">
        <img
          loading="lazy"
          class="h-10"
          src="~/assets/images/full-logo.svg"
          alt="full-logo">
      </nuxt-link>
      <responsive-menu class="inline lg:hidden" />
    </div>
    <!-- Content -->
    <div class="flex mt-16">
      <!-- NavBar -->
      <nav-bar />
      <!-- Main Content -->
      <transition
        name="fade"
        mode="out-in">
        <nuxt />
      </transition>
      <!-- Contact Section -->
      <div class="lg:inline hidden text-center ml-4 w-10">
        <div class="mb-12">
          <span class="text-yellow-400">
            <i class="ic-arrow" />
          </span>
        </div>
        <div class="social absolute -ml-6">
          <a href="https://horchatajs.com/blog/" target="_blank">
            Leé el blog
          </a>
        </div>
        <div class="flex flex-col justify-end items-center h-full">
          <a href="https://github.com/horchatajs" target="_blank">
            <img
              loading="lazy"
              class="w-12"
              :src="require('~/assets/css/icons/social/github.svg')"
              alt="github">
          </a>
          <a href="https://facebook.com/horchatajs" target="_blank">
            <img
              loading="lazy"
              class="w-12"
              :src="require('~/assets/css/icons/social/facebook.svg')"
              alt="facebook">
          </a>
          <a href="https://twitter.com/horchatajs" target="_blank">
            <img
              loading="lazy"
              class="w-12"
              :src="require('~/assets/css/icons/social/twitter.svg')"
              alt="twitter">
          </a>
          <a href="https://instagram.com/horchatajs" target="_blank">
            <img
              loading="lazy"
              class="w-12"
              :src="require('~/assets/css/icons/social/instagram.svg')"
              alt="instagram">
          </a>
        </div>
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

<style scoped>
.social {
  transform: rotate(270deg);
}
</style>
