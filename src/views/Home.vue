<template>
  <section id="home">
    <h1 class="header-title-responsive">{{ text.header }}</h1>
    <img class="img-avatar" :src="img.src" :alt="img.alt" />
    <p class="header-text-responsive">
      {{ text.paragraph }}
    </p>
  </section>
</template>

<script>
import myImg from '@/assets/me.jpg';

export default {
  data () {
    return {
      text: {
        header: 'Hi. I\'m Tobi',
        paragraph:
          'I\'m a selftaught webdeveloper',
        button: 'Let\'s get in touch'
      },
      img: {
        src: myImg,
        alt: 'picture with the author of this page'
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/scss/variables";
@import "@/scss/fonts";
@import "@/scss/modules/buttons";
@import "@/scss/modules/images";
@import "@/scss/modules/footerbar";

#home {
  background-color: $main-color-detail;
  padding: $gap-md;
  color: $main-color-background;
  h1,
  p {
    width: 100%;
    text-align: center;
  }
}
</style>
