export default {
  countries(state) {
    return state.countries;
  },
  regions(state) {
    console.log("I GUESS", state.regions)
    return state.regions;
  },

  selectedCountry(state) {
    console.log("THE FUCKING COUNTRY SELECTED", state);
    return state.selectedCountry;
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
