<template>
  <div class="flex flex-col items-center w-full">
    <h1 class="font-bold text-2xl md:text-7xl">
      Eventos
    </h1>
    <p class="text-center tracking-wide font-light mt-4 md:text-xl">
      ¡Gracias a vos por ser parte de nuestros eventos!
    </p>

    <div class="flex items-center">
      <a
        v-for="(event, index) in events"
        :key="index"
        :class="{'rounded-lg bg-yellow-400 text-white px-4 shadow-lg' : event.year === yearSelected }"
        class="font-medium text-lg mt-8 text-center mx-2 cursor-pointer md:text-xl"
        @click="yearSelected = event.year">
        {{ event.year }}
      </a>
    </div>

    <!-- Desktop -->
    <div class="flex mt-12 justify-between w-full hidden lg:inline">
      <event-list :events="meetups" />
    </div>

    <!-- Responsive -->
    <div class="scrolling-wrapper mt-12 justify-center w-full inline lg:hidden">
      <event-list :events="meetups" />
    </div>
  </div>
</template>

<script>
import EventList from '../components/EventList'

export default {
  components: {
    EventList
  },
  data() {
    return {
      yearSelected: 2018,
      events: [
        {
          year: 2018,
          meetups: [
            {
              title: 'HorchataJS 1.0.0',
              image: require('~/assets/images/events/2018/ev1.0.png'),
              date: '24 Febrero',
              meetupUrl: 'https://www.meetup.com/horchatajs/events/247501252/'
            },
            {
              title: 'HorchataJS 2.0.0',
              image: require('~/assets/images/events/2018/ev2.0.png'),
              date: '28 Abril',
              meetupUrl: 'https://www.meetup.com/horchatajs/events/247501252/'
            },
            {
              title: 'HorchataJS 3.0.0',
              image: require('~/assets/images/events/2018/ev3.0.png'),
              date: '30 Junio',
              meetupUrl: 'https://www.meetup.com/horchatajs/events/247501309/'
            },
            {
              title: 'HorchataJS 4.0.0',
              image: require('~/assets/images/events/2018/ev4.0.png'),
              date: '25 Agosto',
              meetupUrl: 'https://www.meetup.com/horchatajs/events/247501327/'
            },
            {
              title: 'HorchataJS 5.0.0',
              image: require('~/assets/images/events/2018/ev5.0.png'),
              date: '27 Octubre',
              meetupUrl: 'https://www.meetup.com/horchatajs/events/247501347/'
            }
          ]
        },
        {
          year: 2019,
          meetups: [
            {
              title: 'HorchataJS 6.0.0',
              image: require('~/assets/images/events/2019/ev6.0.png'),
              date: '9 Marzo',
              meetupUrl: 'https://www.meetup.com/horchatajs/events/258862256/'
            },
            {
              title: 'HorchataJS 7.0.0',
              image: require('~/assets/images/events/2019/ev7.0.png'),
              date: '25 Mayo',
              meetupUrl: 'https://www.meetup.com/horchatajs/events/261653665/'
            },
            {
              title: 'HorchataJS 8.0.0',
              image: require('~/assets/images/events/2019/ev8.0.png'),
              date: '27 Julio',
              meetupUrl: 'https://www.meetup.com/horchatajs/events/261843756/'
            },
            {
              title: 'HorchataJS 9.0.0',
              image: require('~/assets/images/events/2019/ev9.0.png'),
              date: '28 Septiembre',
              meetupUrl: 'https://www.meetup.com/horchatajs/events/265022919/'
            }
          ]
        }
      ]
    }
  },
  computed: {
    meetups() {
      const event = this.events.find(e => e.year === this.yearSelected)

      return event.meetups
    }
  }
}
</script>

<style scoped>
/* eslint-disable */
.scrolling-wrapper {
  -webkit-overflow-scrolling: touch;
  @apply whitespace-no-wrap overflow-x-scroll overflow-y-hidden;
}

.scrolling-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
