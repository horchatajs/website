<template>
  <div class="flex flex-1 flex-col lg:flex-row items-center justify-center">
    <div class="flex flex-col justify-between w-full">
      <transition-group name="slide-fade" mode="out-in">
        <!-- Section 1 -->
        <div
          v-show="selectedSection === 'section-1'"
          :key="'section-1'"
          class="flex flex-col w-full items-center justify-between xl:flex-row">
          <img
            src="~/assets/images/about-1.svg"
            alt="Join"
            width="500">
          <div class="flex flex-col text-center items-center xl:items-end xl:text-right mt-8 xl:-mt-32">
            <div class="font-bold text-2xl md:text-5xl lg:text-6xl xl:leading-tight">
              Aprender<br class="xl:-mt-8"> & Compartir
            </div>
            <div class="tracking-wide text-sm mt-6 sm:text-lg font-light">
              Somos una comunidad de desarrolladores en <br>
              El Salvador que nació en el 2015 con el objetivo de <br>
              ofrecer un espacio gratuito y abierto para aprender y <br>
              compartir conocimiento sobre JavaScript <br>
              además de crear espacios de networking.
            </div>
          </div>
        </div>

        <!-- Section 2 -->
        <div
          v-show="selectedSection === 'section-2'"
          :key="'section-2'"
          class="flex flex-col items-center w-full justify-between">
          <div class="flex justify-center text-sm">
            <div class="tracking-wide text-sm font-light text-center sm:text-lg">
              Con tu apoyo nuestra comunidad ha ido creciendo y <br class="hidden sm:inline">
              estamos orgullosos de seguir compartiendo con más personas
            </div>
          </div>
          <div class="flex mt-8 mb-6 w-full justify-center -mr-4">
            <div
              v-for="(indicator, key) in indicators"
              :key="key"
              class="flex flex-col text-center tracking-wide mr-4">
              <div class="text-4xl lg:text-5xl font-bold">
                {{ indicator.value }}
              </div>
              <div class="text-xs lg:text-sm">
                {{ indicator.name }}
              </div>
            </div>
          </div>
          <img
            class="object-cover h-64 sm:object-contain sm:h-full"
            width="1200"
            src="~/assets/images/about-2.svg"
            alt="about-1 illustation">
        </div>

        <!-- Section 3 -->
        <div
          v-show="selectedSection === 'section-3'"
          :key="'section-3'"
          class="flex flex-col w-full items-center justify-between xl:flex-row">
          <img
            src="~/assets/images/about-3.svg"
            width="700"
            alt="about-3 illustation">
          <div class="flex flex-col">
            <div class="flex justify-center text-sm lg:mt-0 xl:justify-end">
              <div class="tracking-wide text-sm mt-6 text-center xl:text-right sm:text-lg font-light">
                Como comunidad hemos estado presentes y <br>
                participado en eventos como:
              </div>
            </div>
            <div class="flex flex-wrap justify-center mt-4 mb-8 lg:flex-row xl:justify-end">
              <div class="flex w-full justify-center xl:justify-end">
                <div
                  class="pl-8 pr-8 pt-2 pb-2 mt-8 text-center shadow-md mx-1 rounded-lg text-sm xl:p-8 lg:w-48 lg:text-lg">
                  <div class="font-bold">
                    BT7
                  </div>
                  <div class="text-xs">
                    El Salvador
                  </div>
                </div>
                <div class="pl-8 pr-8 pt-2 pb-2 mt-8 text-center shadow-md mx-1 rounded-lg text-sm xl:p-8 lg:w-48 lg:text-lg">
                  <div class="font-bold">
                    NodeSchool
                  </div>
                  <div class="text-xs">
                    Sonsonate
                  </div>
                </div>
              </div>
              <div class="flex w-full justify-center xl:justify-end">
                <div
                  class="pl-8 pr-8 pt-2 pb-2 mt-8 text-center shadow-md mx-1 rounded-lg text-sm xl:p-8 lg:w-48 lg:text-lg">
                  <div class="font-bold">
                    F8 Meetup
                  </div>
                  <div class="text-xs">
                    Guatemala
                  </div>
                </div>
                <div
                  class="pl-8 pr-8 pt-2 pb-2 mt-8 text-center shadow-md mx-1 rounded-lg text-sm xl:p-8 lg:w-48 lg:text-lg">
                  <div class="font-bold">
                    Dribble
                  </div>
                  <div class="text-xs">
                    El Salvador
                  </div>
                </div>
              </div>

              <div
                class="pl-8 pr-8 pt-2 pb-2 mt-8 text-center shadow-md mx-1 rounded-lg text-sm xl:p-8 lg:w-48 lg:text-lg">
                <div class="font-bold">
                  Creative Mornings
                </div>
                <div class="text-xs">
                  El Salvador
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
      <div class="flex justify-center items-center mt-10 mb-4">
        <button
          v-for="(section, key) in sections"
          :key="key"
          class="rounded-full outline-none p-1 bg-gray-800 mr-4"
          :class="{'bg-yellow-400' : `section-${key+1}` === selectedSection }"
          @click="next(section)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loopId: null,
      sectionLoop: 1,
      selectedSection: 'section-1',
      sections: ['section-1', 'section-2', 'section-3'],
      indicators: [
        {
          value: '1,356',
          name: 'Likes en Facebook'
        },
        {
          value: '700',
          name: 'Miembros en Slack'
        },
        {
          value: '500',
          name: 'Han asistido a eventos'
        }
      ],
      communities: [
        {
          name: 'BT7',
          from: 'El Salvador'
        },
        {
          name: 'NodeSchool',
          from: 'El Salvador'
        },
        {
          name: 'F8 Meetup',
          from: 'El Salvador'
        },
        {
          name: 'Dribble',
          from: 'El Salvador'
        },
        {
          name: 'Creative Mornings',
          from: 'El Salvador'
        }
      ]
    }
  },
  mounted() {
    this.loopId = setInterval(() => {
      this.sectionLoop++
      if (this.sectionLoop > this.sections.length) this.sectionLoop = 1
      this.selectedSection = 'section-' + this.sectionLoop
    }, 5000)
  },
  methods: {
    next(section) {
      clearInterval(this.loopId)
      this.selectedSection = section
    }
  }
}
</script>

<style scoped>
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
  transform: translateX(0px);
}

.slide-fade-enter-active {
  transition: all 0.6s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.6s ease-out;
  position: absolute;
}
</style>
