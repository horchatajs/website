<template>
  <div class="flex flex-1 flex-col lg:flex-row items-center justify-center">

    <img class="w-2/5 ml-4" src="~/assets/images/identity.svg" alt="identity illustation" width="700">

    <div class="flex flex-col lg:w-2/5 items-center h-full mb-3 lg:items-end justify-between">
      <div class="text-center tracking-wide text-sm lg:w-3/4 lg:text-right lg:mr-3">
        <p class="text-grey uppercase font-bold mb-2 text-xs sm:text-sm">Misión</p>
        <p class="sm:text-lg lg:text-xl">
          Crear eventos, talleres y actividades educativas que beneficien y hagan crecer la comunidad de desarrolladores en el país.
        </p>
      </div>

      <div class="text-center tracking-wide text-sm lg:w-3/4 lg:text-right lg:mr-3 mt-10">
        <p class="text-grey uppercase font-bold mb-2 text-xs sm:text-sm">Visión</p>
        <p class="sm:text-lg lg:text-xl">
          Ser una comunidad de JavaScript reconocida nacional e internacionalmente por la calidad de contenido y el compromiso con la educación de personas interesadas en aprender y compartir.
        </p>
      </div>

      <app-button>
        <template v-slot:button-text>
          <span class="font-medium">
            Código de Conducta
          </span>
        </template>
        <template v-slot:icon>
          <span>
            <i class="ml-3 ic-arrow" />
          </span>
        </template>
        <template v-slot:sub-text>
          <span class="text-xs text-center tracking-wide sm:text-sm">
            Se espera que todos los miembros sigan el código de conducta de la comunidad
          </span>
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
