<template>
  <div class="flex flex-col items-center w-full justify-between xl:flex-row">
    <img
      class="-mt-32 sm:mt-0 xl:ml-32"
      src="~/assets/images/sponsor.svg"
      alt="Join"
      width="700">
    <div class="flex flex-col text-center items-center -mt-40 sm:mt-4 xl:items-end xl:text-right xl:mr-32">
      <div class="font-bold text-2xl md:text-5xl lg:text-6xl xl:leading-tight">
        Patrocinio
      </div>

      <div class="tracking-wide text-sm sm:text-lg font-light mt-8 xl:mt-12">
        ¿Te interesa patrocinar un evento de la <br>comunidad? ¡Escribínos!
      </div>

      <app-button link="http://slack.horchatajs.com" class="mt-8">
        <template v-slot:button-text>
          <span class="normal-case">
            Contactanos
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
