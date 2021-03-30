<template>
  <div class="project-card" :style="backgroundImg">
    <div class="project-card-content">
      <h3 class="project-card-head">
        <slot name="heading" />
      </h3>
      <p class="project-card-text">
        <slot name="text" />
      </p>
      <div class="project-card-footer">
        <a v-if="code" :href="code" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a v-if="demo" :href="demo" target="_blank">
          <i class="fas fa-laptop-code"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backgroundImg:
        'background: url(' +
        this.background +
        ') no-repeat center; background-size: 100%;',
      hovering: false
    };
  },
  props: {
    background: String,
    code: String,
    demo: String
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/variables";
@import "@/scss/modules/projectcard";

a {
  color: $main-color-background;
}

i {
  padding: $gap-xs $gap-sm;
  cursor: pointer;
}
</style>
