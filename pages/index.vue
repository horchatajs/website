<template>
  <div class="flex flex-1 flex-col lg:flex-row items-center justify-center">
    <img src="~/assets/images/home.svg" alt="home illustation" width="700">

    <div class="flex flex-col text-center lg:text-right h-full mb-3">
      <div
        class="lg:inline hidden font-bold tracking-normal text-3xl w-auto p-4 lg:text-6xl"
      >
        ¡Hey!
        <div>Somos</div>HorchataJS
      </div>

      <div
        class="lg:hidden inline font-bold tracking-normal text-3xl w-auto p-4 lg:text-6xl"
      >
        ¡Hey! Somos
        <div>HorchataJS</div>
      </div>

      <div class="flex flex-col text-lg leading-normal">
        Una comunidad de Javascript en
        <div>El Salvador, Centroamérica 🇸🇻</div>
      </div>

      <app-button>
        <template v-slot:button-text>
          Registrate
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
