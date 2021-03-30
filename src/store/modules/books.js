export default {
  /**
   * Different types are:
   * - start
   * - finish
   * - success
   */
  state: () => {
    return {
      books: [
        {
          name: 'The Prince',
          desc: 'A glimpse into the non-altruistic mind',
          auth: 'Niccolo Machiavelli'
        },
        {
          name: 'Unberechenbar',
          desc: 'A great book on how life is too complex to plan it',
          auth: 'Vince Ebert'
        }
      ]
    };
  },
  getters: {
    books (state) {
      return state.books;
    }
  }
};
