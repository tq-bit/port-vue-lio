<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <router-link tag="div" class="navbar-item" active-class="active" to="/">
        <img :src="Logo" class="img-logo"/>
      </router-link>
    </div>
    <div class="navbar-items-wrapper">
      <ul class="navbar-items">
        <router-link
          tag="li"
          class="navbar-item"
          active-class="active"
          to="/about"
        >
          About
        </router-link>
        <router-link
          tag="li"
          class="navbar-item"
          active-class="active"
          to="/showcase"
        >
          Showcase
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/logo.png';

export default {
  data () {
    return { Logo };
  }
};
</script>

<style lang="scss">
@import "@/scss/modules/navbar";
@import "@/scss/modules/images";
</style>
