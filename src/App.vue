<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
    <Menu />
  </div>
</template>

<script>

import Menu from '@/components/Menu.vue'

export default {
   name: 'home',
  components: {
    Menu
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500,600,700&display=swap);
body, html{
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar { width: 0; }
}
#app {
  font-family: 'Hind Vadodara', sans-serif !important;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
