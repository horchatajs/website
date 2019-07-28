<template>
  <div class="flex flex-1 flex-col lg:flex-row items-center justify-center">
    <div class="flex flex-col justify-between">
      <transition-group name="slide-fade">
        <div
          v-show="selectedSection === 'section-1'"
          :key="'section-1'"
          class="flex flex-col lg:flex-row"
        >
          <img src="~/assets/images/about-1.svg" alt="about-1 illustation" width="700">

          <div class="flex flex-col items-center lg:items-end h-full mb-3">
            <div
              class="font-bold tracking-normal text-2xl text-center p-4 lg:text-6xl lg:text-right"
            >
              Aprender
              <p>& Compartir</p>
            </div>
            <div
              class="tracking-wide text-center text-sm lg:text-lg lg:text-right lg:leading-normal lg:mt-8"
            >
              Somos una comunidad de desarrolladores en El Salvador que nació en el 2015 con el objetivo de ofrecer un espacio gratuito y abierto para aprender y compartir conocimiento sobre JavaScript además de crear espacios de networking
            </div>
          </div>
        </div>
        <div v-show="selectedSection === 'section-2'" :key="'section-2'" class="flex flex-col">
          <div class="flex justify-center text-sm mt-10 lg:mt-12">
            <div class="tracking-wide text-center lg:w-1/2 lg:leading-normal lg:text-lg">
              Con tu apoyo nuestra comunidad ha ido creciendo y
              estamos orgullosos de seguir compartiendo con más personas
            </div>
          </div>
          <div class="flex justify-around mt-8 mb-8">
            <div
              v-for="(indicator, key) in indicators"
              :key="key"
              class="flex flex-col text-center mr-3"
            >
              <div class="text-4xl lg:text-5xl font-bold">
                {{ indicator.value }}
              </div>
              <div class="text-xs lg:text-sm">
                {{ indicator.name }}
              </div>
            </div>
            <!-- <div class="flex flex-col text-center mr-3">
              <div class="text-4xl font-bold">700</div>
              <div class="text-xs">Miembros en Slack</div>
            </div>
            <div class="flex flex-col text-center">
              <div class="text-4xl font-bold">500</div>
              <div class="text-xs">Han asistido a eventos</div>
            </div>-->
          </div>
          <img class="hidden sm:inline" width="1200" src="~/assets/images/about-2.svg" alt="about-1 illustation">
          <img
            class="inline sm:hidden w-full"
            src="~/assets/images/about-2-1.svg"
            alt="about-1 illustation"
          >
        </div>
        <div
          v-show="selectedSection === 'section-3'"
          :key="'section-3'"
          class="flex flex-col lg:flex-row"
        >
          <img src="~/assets/images/about-3.svg" alt="about-3 illustation" width="1500">
          <div class="flex flex-col lg:items-end">
            <div class="flex justify-center text-sm mt-10 lg:mt-12">
              <div class="tracking-wide text-center lg:leading-normal lg:text-lg lg:text-right">
                Como comunidad hemos estado presentes y
                participado en eventos como:
              </div>
            </div>
            <div class="flex flex-wrap justify-center mt-8 mb-8 lg:flex-row lg:justify-end w-auto">
              <!-- <div v-for="(community, key) in communities" :key="key">
                <div class="p-8 mt-2 text-center shadow-md mx-1 rounded-lg text-xs lg:w-48 lg:text-lg">
                  <div class="font-bold">{{ community.name }}</div>
                  <div class="text-xs">{{ community.from }}</div>
                </div>
              </div>-->
              <div class="flex w-full justify-center lg:justify-end">
                <div
                  class="p-8 mt-2 text-center shadow-md mx-1 rounded-lg text-xs lg:w-48 lg:text-lg"
                >
                  <div class="font-bold">
                    BT7
                  </div>
                  <div class="text-xs">
                    El Salvador
                  </div>
                </div>
                <div
                  class="p-8 mt-2 text-center shadow-md mx-1 rounded-lg text-xs lg:w-48 lg:text-lg"
                >
                  <div class="font-bold">
                    NodeSchool
                  </div>
                  <div class="text-xs">
                    Sonsonate
                  </div>
                </div>
              </div>
              <div class="flex w-full justify-center lg:justify-end">
                <div
                  class="p-8 mt-2 text-center shadow-md mx-1 rounded-lg text-xs lg:w-48 lg:text-lg"
                >
                  <div class="font-bold">
                    F8 Meetup
                  </div>
                  <div class="text-xs">
                    Guatemala
                  </div>
                </div>
                <div
                  class="p-8 mt-2 text-center shadow-md mx-1 rounded-lg text-xs lg:w-48 lg:text-lg"
                >
                  <div class="font-bold">
                    Dribble
                  </div>
                  <div class="text-xs">
                    El Salvador
                  </div>
                </div>
              </div>

              <div
                class="p-8 mt-2 text-center shadow-md mx-1 rounded-lg text-xs lg:w-48 lg:text-lg"
              >
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
      <div class="flex justify-around lg:justify-center items-center mt-20">
        <button
          v-for="(section, key) in sections"
          :key="key"
          class="rounded-full outline-none w-8 h-8 shadow-lg lg:mr-4"
          :class="{'bg-yellow-400' : `section-${key+1}` === selectedSection }"
          @click="selectedSection = section"
        >
          {{ key + 1 }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
