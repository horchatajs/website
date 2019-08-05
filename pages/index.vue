<template>
  <div class="flex flex-col items-center w-full justify-between xl:flex-row">
    <img
      class="xl:ml-32"
      src="~/assets/images/home.svg"
      alt="Join"
      width="700">
  <div class="flex flex-col text-center items-center sm:mt-4 xl:items-end xl:text-right xl:mr-32">
      <div class="font-bold text-2xl md:text-5xl lg:text-6xl xl:leading-tight">
        ¡Hey!<br class="hidden xl:inline xl:-mt-8"> Somos <br class="inline xl:-mt-8">HorchataJS
      </div>

      <div class="tracking-wide text-sm sm:text-lg font-light mt-8 xl:mt-12">
        Una comunidad de JavaScript en<br>
        El Salvador, Centroamérica. 🇸🇻
      </div>

      <app-button link="http://slack.horchatajs.com" class="mt-8">
        <template v-slot:button-text>
          <span class="normal-case">
            Registrate
          </span>
        </template>
        <template v-slot:icon>
          <span>
            <i class="ml-3 ic-arrow" />
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
