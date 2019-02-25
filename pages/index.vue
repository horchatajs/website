<template>
  <div class="flex flex-col items-center justify-between h-full">
    <img src="~/assets/images/home.svg" alt="home illustation" width="auto" class="mt-12">

    <div class="font-bold tracking-normal leading-normal text-3xl w-64 text-center p-4">
      ¡Hey! Somos HorchataJS
    </div>

    <p class="text-center text-lg w-64 leading-normal">
      Una comunidad de Javascript en El Salvador, Centroamérica 🇸🇻
    </p>

    <app-button>
      <template v-slot:button-text>
        Registrate
      </template>
      <template v-slot:icon>
        <span><i class="ml-3 ic-arrow" /></span>
      </template>
      <template v-slot:sub-text>
        Registrate y aprendé con nosotros ✌
      </template>
    </app-button>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
export default {
  components: {
    AppButton
  }
}
</script>

<style>
</style>
