<template>
  <div id="navbar" class="items-center pl-16 mt-16 hidden lg:inline">
    <ul class="side-nav flex flex-col justify-between relative p-0 m-0">
      <nuxt-link v-for="(item, key) in items" :key="key" tag="li" :to="item.to" exact>
        <span>{{ item.name }}</span>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Inicio', to: '/' },
        { name: 'Nosotros', to: 'about' },
        { name: 'Misión Visión', to: 'identity' },
        { name: 'Equipo', to: 'team' },
        { name: 'Participá', to: 'join' },
        { name: 'Patrocinio', to: 'sponsors' },
        { name: 'Eventos', to: 'events' }
      ]
    }
  }
}
</script>

<style scoped>
.side-nav {
  max-height: 35rem;
  height: 35rem;
  list-style-position: inside;
}

.side-nav::before {
  content: '';
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 2px;
  height: 33.8rem;
  max-height: 750px;
  background-color: #c8c8c8;
  opacity: 0.35;
}

.side-nav > li {
  position: relative;
  top: -5px;
  color: #838383;
  font-size: 15px;
  cursor: pointer;
  margin-left: -2px;
  list-style-type: disc;
}

.side-nav > li span {
  position: relative;
  top: 3px;
  color: black;
  opacity: 0;
  visibility: hidden;
}

.side-nav > li::before {
  position: absolute;
  top: 3px;
  left: 10px;
  color: #838383;
  font-size: 14px;
  font-weight: 400;
}

.side-nav li.nuxt-link-active::before {
  left: -33px;
  font-size: 18px;
  color: black;
}

.side-nav li.nuxt-link-active span {
  opacity: 1;
  font-size: 18px;
  visibility: visible;
  -webkit-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
}

.side-nav li.nuxt-link-active {
  color: #f7df1e;
  -webkit-transition: color 0.4s ease-in-out;
  transition: color 0.4s ease-in-out;
}

.side-nav li:nth-child(1)::before {
  content: '01';
}

.side-nav li:nth-child(2)::before {
  content: '02';
}

.side-nav li:nth-child(3)::before {
  content: '03';
}

.side-nav li:nth-child(4)::before {
  content: '04';
}
.side-nav li:nth-child(5)::before {
  content: '05';
}
.side-nav li:nth-child(6)::before {
  content: '06';
}
.side-nav li:nth-child(7)::before {
  content: '07';
}
</style>
