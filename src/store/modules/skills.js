export default {
  state: () => {
    return {
      webTech: [
        {
          name: 'Node.js',
          color: '#68a063',
          icon: '<i class="fab fa-node-js"></i>'
        },
        {
          name: 'OData',
          color: '#d34615',
          icon: '<i class="fas fa-database"></i>'
        },
        {
          name: 'Vue.js',
          color: '#41b883',
          icon: '<i class="fab fa-vuejs"></i>'
        },
        {
          name: 'HTML|CSS',
          color: '#ff6600',
          icon: '<i class="fab fa-html5"></i>'
        },
        {
          name: 'Javascript',
          color: '#f0bd4f',
          icon: '<i class="fab fa-js-square"></i>'
        },
        {
          name: 'OpenUI5',
          color: '#6191ba',
          icon: '<i class="fab fa-phoenix-squadron"></i>'
        },
        {
          name: 'NoSql',
          color: '#4db33d',
          icon: '<i class="fas fa-server"></i>'
        },
        {
          name: 'Bootstrap',
          color: '#5d4584',
          icon: '<i class="fab fa-bootstrap"></i>'
        }
      ]
    };
  },
  getters: {
    sortedOtherTech (state) {
      return state.otherTech.sort((a, b) => { return b.value - a.value; });
    },

    sortedDbTech (state) {
      return state.dbTech.sort((a, b) => { return b.value - a.value; });
    },

    sortedWebTech (state) {
      return state.webTech.sort((a, b) => { return b.value - a.value; });
    }
  }
};
