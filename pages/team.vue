<template>
  <div class="flex flex-col items-center w-full">
    <div class="font-bold text-2xl md:text-7xl">
      Somos un Equipo
    </div>
    <div class="text-center text-sm tracking-wide font-light pt-6 md:text-xl">
      Una comunidad de JavaScript en
      <br>
      El Salvador, Centroamérica. 🇸🇻
    </div>
    <div class="flex flex-wrap mt-5 w-full md:pt-20 md:justify-between lg:pl-16 lg:pr-16">
      <div
        v-for="(founder, index) in founders"
        :key="index"
        class="flex flex-col items-center text-center w-1/2 mb-4 md:w-1/3  xl:w-auto">
        <img
          :src="founder.image"
          :alt="founder.name">
        <span class="font-bold md:text-lg">{{ founder.name }}</span>
        <span class="font-light text-xs">{{ founder.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      founders: [
        {
          name: 'Ricardo Ramirez',
          image: require('~/assets/images/founders/ricardo-ramirez.svg'),
          title: 'Fundador'
        },
        {
          name: 'César Ramirez',
          image: require('~/assets/images/founders/cesar-ramirez.svg'),
          title: 'Fundador'
        },
        {
          name: 'Diego Melgar',
          image: require('~/assets/images/founders/diego-melgar.svg'),
          title: 'Fundador'
        },
        {
          name: 'Raúl Bermudez',
          image: require('~/assets/images/founders/raul-bermudez.svg'),
          title: 'Fundador'
        },
        {
          name: 'Raúl Gonzales',
          image: require('~/assets/images/founders/raul-gonzales.svg'),
          title: 'Fundador'
        },
        {
          name: 'Katherine Ponce',
          image: require('~/assets/images/founders/katherine-ponce.svg'),
          title: 'Fundador'
        }
      ]
    }
  }
}
</script>

<style scoped>
img {
  width: 100px;
}
@media (min-width: 768px) {
  img {
    width: 150px;
  }
}
</style>
