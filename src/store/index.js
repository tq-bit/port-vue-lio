import Vue from 'vue';
import Vuex from 'vuex';

// Import store modules
import skills from './modules/skills';
import sections from './modules/sections';
import projects from './modules/projects';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    skills,
    sections,
    projects
  }
});
