export default {
  setCountries(state, payload) {
    state.countries.push(payload);
  },
  setRegions(state,payload){
    state.regions.push(payload)
  },
  searchCountry(state, payload) {
    state.selectedCountry.push(payload);
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};