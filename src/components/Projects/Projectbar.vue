<template>
  <div class="project-bar grid-container">
    <app-projectcard v-for="project in projects" :key="project.name" :background="project.linkThumbnail" :code="project.linkRepos" :demo="project.linkDemo">
      <template v-slot:heading>{{project.name}}</template>
      <template v-slot:text>{{project.text}}</template>
    </app-projectcard>
  </div>
</template>

<script>
import Projectcard from './Projectcard';

export default {
  components: {
    'app-projectcard': Projectcard
  },

  props: {
    projects: Array
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/layout";

.project-bar {
  width: 100%;
}
</style>
