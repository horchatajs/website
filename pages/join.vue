<template>
  <div class="flex flex-col items-center w-full justify-between xl:flex-row">
    <img
      class="-mt-32 sm:mt-0 xl:ml-32"
      src="~/assets/images/join.svg"
      alt="Join"
      width="700">
    <div class="flex flex-col text-center items-center -mt-16 sm:mt-4 xl:items-end xl:text-right xl:mr-32">
      <div class="font-bold text-2xl md:text-5xl lg:text-6xl xl:leading-tight">
        Formá parte<br class="hidden xl:inline xl:-mt-8"> del equipo
      </div>

      <div class="xl:hidden">
        <div class="mt-3">
          <h3 class="tracking-widest uppercase text-sm font-medium text-gray-400 work-sans">
            {{ activity.title }}
          </h3>
          <div class="tracking-wide mt-2 font-light text-sm sm:text-lg" v-html="activity.body" />
        </div>

        <div class="flex justify-center mt-4">
          <div
            v-for="(val, index) in activities"
            :key="index"
            class="p-1 bg-gray-500 rounded-full mr-2 cursor-pointer"
            :class="{ 'bg-gray-800': index === activeIndex}"
            @click="next(index)" />
        </div>
      </div>
      <div class="tracking-wide text-sm sm:text-lg font-light hidden xl:inline xl:mt-12">
        Tu charla puede ser acerca de Javascript o temas
        <br>relacionados a su uso; cualquier experiencia,
        <br>proyecto o historia es bienvenida. Y no, no necesitás
        <br>ser alguien experto para dar una charla.

        <p class="mt-10">
          Tratamos de planear todo en comunidad. Chateá
          <br>con nosotros en
          <a
            target="_blank"
            class="font-medium text-yellow-400"
            href="http://slack.horchatajs.com">Slack</a> o
          participá en
          <a
            target="_blank"
            class="font-medium text-yellow-400"
            href="https://github.com/horchatajs">Github</a>
        </p>
      </div>
      <app-button link="http://slack.horchatajs.com" class="mt-8">
        <template v-slot:button-text>
          <span class="xl:hidden">
            Slack
          </span>
          <span class="lowercase hidden xl:inline">
            slack.horchatajs.com
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
  },
  data() {
    return {
      activity: {},
      counter: 0,
      activeIndex: 0,
      activities: [
        {
          title: 'charlas',
          body:
            'Tu charla puede ser acerca de JavaScript o temas relacionados a su uso; cualquier experiencia, proyecto o historia es bienvenida. Y no, no necesitás ser alguien experto para dar una charla.'
        },
        {
          title: 'organizar',
          body: `Tratamos de planear todo en comunidad. Chateá con nosotros en
          <a target="_blank" class="font-medium text-yellow-400" href="http://slack.horchatajs.com">Slack</a> o
          participá en <a target="_blank" class="font-medium text-yellow-400" href="https://github.com/horchatajs">Github</a>`
        }
      ]
    }
  },
  beforeMount() {
    this.activity = this.activities[0]
  },
  methods: {
    next(index) {
      this.counter++
      this.activeIndex = index
      this.activity = this.activities[index]
    }
  }
}
</script>
