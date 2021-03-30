import Logo from '@/assets/logo.png';

export default {
  state: () => {
    return {
      projects: [
        {
          name: 'Color Cooper',
          text: 'Pick colors from your favorite pics',
          linkRepos: 'https://github.com/EarthenLynx/color-cooper',
          linkDemo: 'https://color-cooper.herokuapp.com/',
          linkThumbnail:
            'https://color-cooper.herokuapp.com/img/cooper_360.bc1d0ad1.png'
        },
        {
          name: 'JWT Auth',
          text: 'Demonstrates basic JWT authentication',
          linkRepos: 'https://github.com/EarthenLynx/color-cooper',
          linkDemo: 'https://jwt-sessions.herokuapp.com/',
          linkThumbnail: 'https://jwt.io/img/pic_logo.svg'
        },
        {
          name: 'Convertible',
          text: 'Quickly convert images for the web ',
          linkRepos: 'https://github.com/tq-bit/convertible',
          linkThumbnail: Logo
        },
        {
          name: 'Express MVC',
          text: 'An educational repos on Express.js MVC pattern',
          linkRepos: 'https://github.com/EarthenLynx/express-mvc',
          linkThumbnail: Logo
        },
        {
          name: 'Express OpenAPI Boilerplate',
          text: 'A basic express template using the OpenAPI specification',
          linkRepos: 'https://github.com/EarthenLynx/express-boilerplate',
          linkThumbnail: Logo
        }
      ]

      //
    };
  },
  getters: {
    myProjects (state) {
      return state.projects;
    }
  }
};
