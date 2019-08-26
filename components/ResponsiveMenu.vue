<template>
  <div>
    <div
      class="menu-container text-gray-200 shadow-lg cursor-pointer p-3 rounded-full"
      :class="{'full-menu' : open}"
      @click="open = !open">
      <svg
        v-if="!open"
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12H8C7.448 12 7 11.552 7 11C7 10.448 7.448 10 8 10H15C15.552 10 16 10.448 16 11C16 11.552 15.552 12 15 12Z" fill="#C5CFD6" />
        <path d="M15 7H1C0.448 7 0 6.552 0 6C0 5.448 0.448 5 1 5H15C15.552 5 16 5.448 16 6C16 6.552 15.552 7 15 7Z" fill="#AFB9C5" />
        <path d="M15 2H1C0.448 2 0 1.552 0 1C0 0.448 0.448 0 1 0H15C15.552 0 16 0.448 16 1C16 1.552 15.552 2 15 2Z" fill="#AFB9C5" />
      </svg>

      <svg
        v-else
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0.707089 10.6064L10.6066 0.706956C10.9969 0.316633 11.6305 0.316633 12.0208 0.706956C12.4111 1.09728 12.4111 1.73085 12.0208 2.12117L2.1213 12.0207C1.73098 12.411 1.09741 12.411 0.707089 12.0207C0.316766 11.6303 0.316766 10.9968 0.707089 10.6064Z" fill="#C5CFD6" />
        <path d="M10.6068 12.4349L0.707322 2.53538C0.316999 2.14506 0.316999 1.51149 0.707322 1.12117C1.09764 0.730846 1.73121 0.730846 2.12154 1.12117L12.021 11.0207C12.4114 11.411 12.4114 12.0446 12.021 12.4349C11.6307 12.8252 10.9971 12.8252 10.6068 12.4349Z" fill="#C5CFD6" />
      </svg>
    </div>
    <div
      class="overlay bg-white mt-32"
      :class="{'open': open}">
      <nav class="text-3xl">
        <ul class="flex flex-col items-center mt-64">
          <li
            v-for="(r, index) in routes"
            :key="index"
            class="mt-8 font-bold cursor-pointer w-auto"
            @click="navigate(r.path)">
            {{ r.title }}
          </li>
          <div class="flex flex-col items-end w-full -mt-20 pr-8">
            <a href="https://github.com/horchatajs" target="_blank">
              <img
                class="w-12"
                :src="require('~/assets/css/icons/social/github.svg')"
                alt="github">
            </a>
            <a href="https://facebook.com/horchatajs" target="_blank">
              <img
                class="w-12"
                :src="require('~/assets/css/icons/social/facebook.svg')"
                alt="facebook">
            </a>
            <a href="https://twitter.com/horchatajs" target="_blank">
              <img
                class="w-12"
                :src="require('~/assets/css/icons/social/twitter.svg')"
                alt="twitter">
            </a>
            <a href="https://instagram.com/horchatajs" target="_blank">
              <img
                class="w-12"
                :src="require('~/assets/css/icons/social/instagram.svg')"
                alt="instagram">
            </a>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveMenu',
  data() {
    return {
      open: false,
      routes: [
        { title: 'Inicio', path: '/' },
        { title: 'Nosotros', path: '/about' },
        { title: 'Misión y Visión', path: '/identity' },
        { title: 'Equipo', path: '/team' },
        { title: 'Participá', path: '/join' },
        { title: 'Patrocinio', path: '/sponsors' },
        { title: 'Eventos', path: '/events' }
      ]
    }
  },
  methods: {
    navigate(path) {
      this.open = false
      this.$router.push({ path })
    }
  }
}
</script>

<style scoped>
.menu-container {
  transition: all 0.3s;
}

.menu {
  top: 45px;
  left: 325px;
  transition: all 0.3s;
}

.full-menu .menu {
  top: 40px;
  left: 40px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
}
.overlay.open {
  opacity: 1;
  visibility: visible;
  height: 100%;
}
.overlay.open {
  animation: fadeInRight 0.5s ease forwards;
}

.overlay.open li {
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.35s;
}
.overlay.open li:nth-of-type(2) {
  animation-delay: 0.4s;
}
.overlay.open li:nth-of-type(3) {
  animation-delay: 0.45s;
}
.overlay.open li:nth-of-type(4) {
  animation-delay: 0.5s;
}
.overlay nav {
  margin-top: 2rem;
  top: 40%;
  transform: translateY(-50%);
  text-align: center;
}

.overlay ul li {
  color: #c8c8c8;
  position: relative;
  opacity: 0;
  transform: scale(1);
  transition: all 0.3s;
}

.overlay ul li:hover,
.overlay ul li:focus,
.overlay ul li:active {
  opacity: 1;
  transform: scale(1.2);
  transition: all 0.3s;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
</style>
