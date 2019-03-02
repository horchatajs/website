<template>
  <div class="hidden sm:inline">
    <nav class="l-side-nav">
      <ul class="side-nav">
        <nuxt-link v-for="(item, key) in items" :key="key" tag="li" :to="item.to" exact>
          <span>{{ item.name }}</span>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        { name: 'Home', to: '/' },
        { name: 'Works', to: 'about' },
        { name: 'About', to: 'join' },
        { name: 'Contact', to: 'identity' },
        { name: 'Hire Us', to: 'sponsors' }
      ]
    }
  }
}
</script>

<style scoped>
@media (max-width: 1180px) {
  .l-side-nav {
    display: none;
  }
}

.l-side-nav {
  position: absolute;
  left: 65px;
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
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 2px;
  height: 56%;
  max-height: 750px;
  background-color: #c8c8c8;
  opacity: 0.35;
  z-index: 10;
}

.side-nav {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100px;
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
}

.side-nav > li {
  position: relative;
  top: -5px;
  /* color: #f7df1e; */
  color: #838383;
  font-size: 15px;
  cursor: pointer;
  margin-left: -2px;
}

.side-nav li.nuxt-link-active::before {
  left: -33px;
  font-size: 18px;
  color: black;
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

.side-nav > li::before {
  position: absolute;
  top: 3px;
  left: 10px;
  color: #838383;
  font-size: 14px;
  font-weight: 400;
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

.side-nav > li span {
  position: relative;
  top: 3px;
  /* left: 10px; */
  color: black;
  /* font-size: 14px; */
  /* font-weight: 300; */
  opacity: 0;
  visibility: hidden;
}
</style>
