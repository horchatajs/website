<template>
  <div class="flex flex-col items-center w-full">
    <h1 class="font-bold tracking-wide text-2xl">
      Eventos 2018
    </h1>

    <p class="text-center tracking-wide font-light mt-10">
      ¡Gracias a vos por ser parte! El 2018 fue un año lleno de mucha HorchataJS
    </p>

    <!-- Desktop -->
    <div class="flex mt-12 justify-between w-full hidden lg:inline">
      <event-list :events="events" />
    </div>

    <!-- Responsive -->
    <div class="scrolling-wrapper mt-12 justify-center w-full inline lg:hidden">
      <event-list :events="events" />
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
      events: [
        {
          title: 'HorchataJS 1.0.0',
          image: require('~/assets/images/events/2018/ev1.0.png'),
          date: '24 Febrero 2018'
        },
        {
          title: 'HorchataJS 2.0.0',
          image: require('~/assets/images/events/2018/ev2.0.png'),
          date: '28 Abril 2018'
        },
        {
          title: 'HorchataJS 3.0.0',
          image: require('~/assets/images/events/2018/ev3.0.png'),
          date: '30 Junio 2018'
        },
        {
          title: 'HorchataJS 4.0.0',
          image: require('~/assets/images/events/2018/ev4.0.png'),
          date: '25 Agosto 2018'
        },
        {
          title: 'HorchataJS 5.0.0',
          image: require('~/assets/images/events/2018/ev5.0.png'),
          date: '27 Octubre 2018'
        }
      ]
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
