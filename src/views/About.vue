<template>
  <section id="about">
    <ul class="pillbar-items">
      <li
        v-for="component in componentPool"
        class="pillbar-item"
        @click="changeActiveComponent(component.id)"
        :class="{ active: component.isActive }"
        :key="component.name"
      >
        {{ component.name }}
      </li>
    </ul>
    <div class="pillbar-container">
      <component :is="componentActive.name" />
    </div>
  </section>
</template>

<script>
import Me from '@/components/About/Me';
import Books from '@/components/About/Books';
import Skills from '@/components/About/Skills';

export default {
  components: {
    Me,
    Books,
    Skills
  },

  data () {
    return {
      componentPool: [
        {
          id: 1,
          name: 'Me',
          isActive: true
        },
        {
          id: 2,
          name: 'Skills',
          isActive: false
        },
        {
          id: 3,
          name: 'Books',
          isActive: false
        }
      ]
    };
  },

  computed: {
    componentActive () {
      return this.componentPool.find(component => {
        return component.isActive;
      });
    }
  },

  methods: {
    changeActiveComponent (newId) {
      const oldId = this.componentActive.id;
      const oldIndex = this.componentPool.findIndex(component => {
        return component.id === oldId;
      });
      const newIndex = this.componentPool.findIndex(component => {
        return component.id === newId;
      });

      if (oldIndex !== newIndex) {
        this.componentPool[newIndex].isActive = true;
        this.componentPool[oldIndex].isActive = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/variables";
@import "@/scss/modules/pillbar";

#about {
  background-color: $main-color-detail;
  padding: $gap-md;
  color: $main-color-background;
  h1,
  p {
    text-align: center;
  }
  button.btn {
    width: 100% !important;
  }
}
</style>
