export default {
  countries(state) {
    return state.countries;
  },

  selectedCountry(state){
    return state.selectedCountry
  }
,
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }

};
