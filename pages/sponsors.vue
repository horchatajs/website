<template>
  <div class="flex flex-col items-center w-full justify-between xl:flex-row">
    <img
      loading="lazy"
      src="~/assets/images/sponsor.svg"
      alt="Join"
      width="500">
    <div class="flex flex-col text-center items-center sm:mt-4 xl:items-end xl:text-right xl:-mt-32">
      <div class="font-bold text-2xl md:text-6xl lg:text-7xl xl:leading-tight">
        Patrocinio
      </div>

      <div class="tracking-wide text-sm sm:text-lg font-light mt-8 xl:mt-10">
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
