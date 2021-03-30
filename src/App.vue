<template>
  <div id="app">
    <app-navbar></app-navbar>
    <main class="card-container">
      <transition mode="out-in" name="router-flip">
        <router-view />
      </transition>
    </main>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer
  }
};
</script>

<style lang="scss">
// Import the global variables
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import "@/scss/variables.scss";
@import "@/scss/layout.scss";

* {
  font-family: "Lato", sans-serif;
}

body {
  background: $main-color-background url("./assets/bg.jpg") no-repeat fixed
    center;
  max-height: 100vh;
  margin: 0;
  padding: 0;

  a {
    color: $main-color-background;
  }

  main {
    height: 85vh;
  }

  footer {
    height: 7.5vh;
  }
}

// Animations
.router-flip-enter {
  transform: rotateY(-90deg);
  opacity: 0;
}

.router-flip-enter-active {
  position: absolute;
  transition: all 0.65s;
}

.router-flip-leave-active {
  transform: rotateY(90deg);
  transition: all 0.65s;
  opacity: 0;
}
</style>
