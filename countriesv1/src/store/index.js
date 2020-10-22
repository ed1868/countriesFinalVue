import { createStore } from 'vuex';

import countriesModule from './modules/countries/index.js';


const store = createStore({
  modules: {
    countries: countriesModule,
  },
  state() {
    return {
      currentCountry: null
    };
  },
  getters: {
    selectedCountry(state) {
      return state.currentCountry;
    }
  }
});

export default store;