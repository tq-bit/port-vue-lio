<template>
  <section id="showcase">
    <h1 class="header-title-responsive">Open source</h1>
    <app-projectbar :projects="projects"></app-projectbar>
  </section>
</template>

<script>
import Projectbar from '@/components/Projects/Projectbar';

export default {
  components: {
    'app-projectbar': Projectbar
  },

  computed: {
    projects () {
      return this.$store.getters.myProjects;
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/variables";
@import "@/scss/fonts";

#showcase {
  background-color: $main-color-detail;
  padding: $gap-md;
  color: $main-color-background;
  h1,
  p {
    text-align: center;
  }
}
</style>
