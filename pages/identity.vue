<template>
  <div class="flex flex-col items-center w-full justify-between xl:flex-row">
    <img
      class="-mt-32 sm:mt-0 xl:ml-32"
      src="~/assets/images/identity.svg"
      alt="Join"
      width="700">
    <div class="flex flex-col text-center items-center -mt-32 sm:mt-4 xl:items-end xl:text-right xl:mr-32">
      <div class="xl:hidden">
        <div class="mt-3">
          <h3 class="tracking-widest uppercase text-sm font-medium text-gray-400 work-sans">
            {{ identity.title }}
          </h3>
          <div class="tracking-wide mt-2 font-light" v-html="identity.body" />
        </div>

        <div class="flex justify-center mt-4">
          <div
            v-for="(val, index) in identities"
            :key="index"
            class="p-1 bg-gray-500 rounded-full mr-2 cursor-pointer"
            :class="{ 'bg-gray-800': index === activeIndex}"
            @click="next(index)" />
        </div>
      </div>

      <div class="tracking-wide text-lg font-light hidden mb-20 xl:inline xl:mt-12">
        <div>
          <h3 class="tracking-widest uppercase text-sm font-medium text-gray-400 work-sans">
            misión
          </h3>
          <div class="tracking-wide mt-2 font-light">
            Crear eventos, talleres y actividades<br>
            educativas que beneficien y hagan crecer la<br>
            comunidad de desarrolladores en el país.
          </div>
        </div>

        <div class="mt-32">
          <h3 class="tracking-widest uppercase text-sm font-medium text-gray-400 work-sans">
            visión
          </h3>
          <div class="tracking-wide mt-2 font-light">
            Ser una comunidad de JavaScript reconocida<br>
            nacional e internacionalmente por la calidad<br>
            de contenido y el compromiso con la<br>
            educación de personas interesadas en aprender y compartir.
          </div>
        </div>
      </div>
      <app-button link="http://slack.horchatajs.com" class="mt-8">
        <template v-slot:button-text>
          <span>
            Código de conducta
          </span>
        </template>
        <template v-slot:icon>
          <span>
            <i class="ml-3 ic-arrow" />
          </span>
        </template>
        <template v-slot:sub-text>
          <span>
            Se espera que todos los miembros sigan el código de<br class="hidden xl:inline">
            conducta de la comunidad
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
  },
  data() {
    return {
      identity: {},
      activeIndex: 0,
      identities: [
        {
          title: 'misión',
          body:
            'Crear eventos, talleres y actividades educativas que beneficien y hagan crecer la comunidad de desarrolladores en el país.'
        },
        {
          title: 'visión',
          body: `Ser una comunidad de JavaScript reconocida nacional e internacionalmente por la calidad de contenido y el compromiso con la educación de personas interesadas en aprender y compartir.`
        }
      ]
    }
  },
  beforeMount() {
    this.identity = this.identities[0]
  },
  methods: {
    next(index) {
      this.activeIndex = index
      this.identity = this.identities[index]
    }
  }
}
</script>
