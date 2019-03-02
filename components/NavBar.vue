<template>
  <div class="md:inline hidden">
    <nav class="l-side-nav">
      <ul class="side-nav">
        <nuxt-link to="/" tag="li" exact>
          <div class="flex items-center">
            <span class="number mr-2">01</span>
            <span class="w-1.5 h-1.5 bg-yellow rounded-full mr-2"></span>
            <span class="menu-text">Inicio</span>
          </div>
        </nuxt-link>
        <nuxt-link to="about" tag="li" exact>
          <div class="flex items-center">
            <span class="number mr-2">02</span>
            <span class="w-1.5 h-1.5 bg-yellow rounded-full mr-2"></span>
            <span class="menu-text">Nosotros</span>
          </div>
        </nuxt-link>
        <nuxt-link to="identity" tag="li" exact>
          <div class="flex items-center">
            <span class="number mr-2">03</span>
            <span class="w-1.5 h-1.5 bg-yellow rounded-full mr-2"></span>
            <span class="menu-text">Misión Visión</span>
          </div>
        </nuxt-link>
        <nuxt-link to="team" tag="li" exact>
          <div class="flex items-center">
            <span class="number mr-2">04</span>
            <span class="w-1.5 h-1.5 bg-yellow rounded-full mr-2"></span>
            <span class="menu-text">Equipo</span>
          </div>
        </nuxt-link>
        <nuxt-link to="join" tag="li" exact>
          <div class="flex items-center">
            <span class="number mr-2">05</span>
            <span class="w-1.5 h-1.5 bg-yellow rounded-full mr-2"></span>
            <span class="menu-text">Participá</span>
          </div>
        </nuxt-link>
        <nuxt-link to="sponsors" tag="li" exact>
          <div class="flex items-center">
            <span class="number mr-2">06</span>
            <span class="w-1.5 h-1.5 bg-yellow rounded-full mr-2"></span>
            <span class="menu-text">Patrocinio</span>
          </div>
        </nuxt-link>
        <nuxt-link to="events" tag="li" exact>
          <div class="flex items-center">
            <span class="number mr-2">07</span>
            <span class="w-1.5 h-1.5 bg-yellow rounded-full mr-2"></span>
            <span class="menu-text">Eventos</span>
          </div>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.l-side-nav {
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.l-side-nav::before {
  content: '';
  position: absolute;
  margin-left: 2.18rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 0.1rem;
  opacity: 0.2;
  height: 60%;
  max-height: 750px;
  background-color: #c8c8c8;
  z-index: 10;
}

.side-nav {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* width: 100px; */
  height: 70%;
  max-height: 750px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style-position: inside;
  z-index: 10;
  color: grey;
}

/* section start: transition */
.side-nav li.nuxt-link-active {
  opacity: 1;
  color: black;
  font-size: 18px;
  visibility: visible;
  -webkit-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
}

.side-nav li.nuxt-link-active span {
  -webkit-transition: color 0.4s ease-in-out;
  transition: color 0.4s ease-in-out;
}
/* section end: transition */

.side-nav li.nuxt-link-active span.menu-text {
  display: list-item;
}

.side-nav li.nuxt-link-active div {
  flex-direction: unset;
  margin-left: unset;
}

.side-nav li span.menu-text {
  display: none;
}

.side-nav li div {
  flex-direction: row-reverse;
}

.side-nav li {
  display: list-item;
  cursor: pointer;
  margin-left: 0.4rem;
  list-style: none;
}
</style>
