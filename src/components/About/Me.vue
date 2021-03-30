<template>
  <div class="gallery-container">
    <img
      :src="image.active.src"
      :alt="image.active.text"
      class="img-fluid"
    />
    <div class="gallery-text">{{image.active.text}}</div>
    <div class="gallery-button-container">
      <button class="btn btn-left" @click="changeActiveImageBackward(image.active.id)">
        <i class="fas fa-angle-double-left"></i>
      </button>
      <button class="btn btn-right" @click="changeActiveImageForward(image.active.id)">
        <i class="fas fa-angle-double-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Hiking from '@/assets/hiking.jpg';
import Citytrip from '@/assets/amsterdam.jpg';
import RP from '@/assets/rp.jpg';

export default {
  mounted () {
    this.image.active = this.image.pool[0];
  },
  data () {
    return {
      image: {
        active: {},
        pool: [
          {
            id: 1,
            src: Hiking,
            text:
              'Hiking is one of my favorite things to do, especially in good company 🌄.'
          },
          {
            id: 2,
            src: Citytrip,
            text:
              'I love going on city trips, usually by the mantra: The path into another culture is paved by its cuisine.'
          },
          {
            id: 3,
            src: RP,
            text:
              'I\'m always eager to try out new stuff, like shooting an RP or crafting some woodwork.'
          }
        ]
      }
    };
  },
  computed: {
    poolMin () {
      const pool = this.image.pool;
      return pool.sort()[0];
    },
    poolMax () {
      const pool = this.image.pool;
      const max = pool.length - 1;
      return pool.sort()[max];
    }
  },
  methods: {
    // Unless the image's id is the maximum of the provided array
    // Increment the ID by one and return the image with that id
    changeActiveImageForward (imgId) {
      if (imgId < this.poolMax.id) {
        this.image.active = this.image.pool.find(image => {
          return image.id === imgId + 1;
        });
      } else {
        this.image.active = this.poolMin;
      }
    },

    // Unless the image's id is the minumum of the provided array
    // Decrement the ID by one and return the image with that id
    changeActiveImageBackward (imgId) {
      console.log(imgId);
      console.log(this.poolMin.id);
      if (imgId > this.poolMin.id) {
        this.image.active = this.image.pool.find(image => {
          return image.id === imgId - 1;
        });
        console.log(this.image.active);
      } else {
        this.image.active = this.poolMax;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/modules/gallery";
</style>
