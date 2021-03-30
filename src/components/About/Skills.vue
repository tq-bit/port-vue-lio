<template>
  <div id="skills">
    <div class="grid-container-4">
      <div
        class="icon-container"
        :style="{ border: '2px solid ' + tech.color }"
        v-for="tech in webtech"
        :key="tech.name"
      >
        <span
          class="icon"
          :style="{ color: tech.color }"
          v-html="tech.icon"
        ></span>
        <span class="icon-footer">{{ tech.name }}</span>
      </div>
    </div>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    webtech () {
      return this.$store.getters.sortedWebTech;
    }
  },
  data () {
    return {
      text:
        'While I\'m most curious about new web tech, my focus lies with modern frontend technologies. I understand frontend frameworks and feel particulary comfortable working with any kind of interface.'
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/variables";
@import "@/scss/layout";

.icon-container {
  padding: $gap-xs $gap-sm;
  border-radius: $gap-xs;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    font-size: 3.5rem;
  }
}
</style>
