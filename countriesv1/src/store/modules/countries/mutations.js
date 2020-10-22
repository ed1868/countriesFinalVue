export default {
  setCountries(state, payload) {
    state.countries.push(payload);
  },
  searchCountry(state, payload) {
    state.selectedCountry = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};