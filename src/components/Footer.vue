<template>
  <div class="foo">
    <transition name="footer-slide" mode="out-in">
      <button
        @click="showfooter = !showfooter"
        v-if="!showfooter"
        class="foobutton"
      >
        <i class="fas fa-fingerprint"></i>
      </button>
      <ul v-else class="foobar">
        <li v-for="contact in contacts" class="foobar-item" :key="contact.text">
          <a :href="contact.link">
            <div v-html="contact.icon"></div>
          </a>
        </li>
        <li class="foobar-item">|</li>
        <li class="foobar-item">
          <i @click="showfooter = !showfooter" class="fas fa-times"></i>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showfooter: false,
      contacts: [
        {
          link: 'tel:+491794311626',
          icon: '<i class="fas fa-mobile-alt"></i>'
        },
        {
          link: 'https://t.me/tqbit',
          icon: '<i class="fab fa-telegram-plane"></i>'
        },
        {
          link:
            'mailto:tobi@q-bit.me?subject=Hi Tobi. I saw your portfolio ...&body=... and felt like dropping you a line!',
          icon: '<i class="far fa-envelope"></i>'
        }
      ]
    };
  }
};
</script>

<style scoped>
.footer-slide-enter {
  transform: translateY(10px);
  opacity: 0;
}

.footer-slide-enter-active {
  transition: all 0.65s;
}

.footer-slide-leave-active {
  transform: translateY(10px);
  transition: all 0.65s;
  opacity: 0;
}
</style>
