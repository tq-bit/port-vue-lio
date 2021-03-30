export default {
  state: () => {
    return {
      aboutMe: {
        header: 'Read more about me',
        texts: [
          'I\'m Tobias Quante. I currently work full-time as Junior IT Consultant, which eventually resulted in nudging me into starting to code myself. Seeing what opportunities it brought, I embraced the vast open ecosystems and welcoming, wholesome communities.',
          'Before that, I\'ve been working in retail for around three years and graduated in enonomics at Bielefeld University. I was also part of a student consulting group, sooner as member and later as advisor. As I fancy learning by doing, digging into new topics became as natural as breathing during that time.',
          'When going on vacation, I usually prefer the southern parts of Bavaria, especially for hiking in the alps, and the eastern part of Bulgaria, for seaside strides. Right, and for the Banitsa 🍞'
        ]
      },

      philosophy: {
        header: 'My philosophy',
        texts: [
          'Being a studied economist, coding offered me a whole new perception of change. While the latest valid, great economic theories are around 50 years old (and mostly outdated), the latest tech breakthrough is created tomorrow. Wherever you look, there\'s always a new, exciting bit of knowledge at the horizon. Getting there drives me.'
        ]
      },

      skillset: {
        header: 'My learning progress on technologies',
        texts: [
          'After initially learning R and how to write simple analytics apps, studying Javascript and its relatives became a passion. In this collection, I keep my learning progress up to date. Here goes what I can do:'
        ]
      },
      showcase: {
        header: 'Webapps & more',
        texts: [
          'Here goes a few of the open source projects I built out of curiousity on new stuff. Click on the project\'s name to find out more about it. You can also find the corresponding Github repos on the left - and a demo on the right side.'
        ]
      }
    };
  },
  getters: {
    textAbouMe (state) {
      return state.aboutMe;
    },

    textPhilosophy (state) {
      return state.philosophy;
    },

    textSkillset (state) {
      return state.skillset;
    },

    textShowcase (state) {
      return state.showcase;
    }
  }
};
