<template>
  <div class="flex flex-1 flex-col lg:flex-row items-center justify-center">
    <img src="~/assets/images/home.svg" alt="home illustation" width="700">

    <div class="flex flex-col items-center lg:items-end h-full mb-3">
      <div class="lg:inline hidden font-bold tracking-normal text-3xl w-auto p-4 lg:text-6xl lg:text-right">
        ¡Hey!
        <div>Somos</div>HorchataJS
      </div>

      <div
        class="lg:hidden inline font-bold tracking-normal text-3xl w-auto p-4 lg:text-6xl lg:text-right"
      >
        ¡Hey! Somos
        <div>HorchataJS</div>
      </div>

      <div class="flex flex-col text-lg items-center lg:items-end leading-normal">
        Una comunidad de Javascript en
        <div>El Salvador, Centroamérica 🇸🇻</div>
      </div>

      <app-button>
        <template v-slot:button-text>
          <span class="font-medium">
            Registrate
          </span>
        </template>
        <template v-slot:icon>
          <span>
            <i class="ml-3 ic-arrow" />
          </span>
        </template>
        <template v-slot:sub-text>
          Registrate y aprendé con nosotros ✌
        </template>
      </app-button>
    </div>
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
