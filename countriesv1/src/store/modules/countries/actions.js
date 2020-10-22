export default {
  async setCountries(context, data) {
    console.log(
      "ALL CONTEXT AND DATA IN SET COUNTRY ACTIONS----",
      context,
      data
    );

   
    
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);

    const responseData = await response.json();

    console.log("FETCHED DATA: ", responseData);
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const countries = [];
    for (const key in responseData) {
      const country = {
        id: key,
        name: responseData[key].name,
        region: responseData[key].region,
        areas: responseData[key].borders,
        flag: responseData[key].flag,
        population: responseData[key].population,
        capital: responseData[key].capital,
        countryCode: responseData[key].alpha2Code,
        languages: responseData[key].languages,
        nativeName: responseData[key].nativeName,
        currency: responseData[key].currencies,
        subRegion: responseData[key].subregion,
      };

      countries.push(country);
    }

    context.commit("setCountries", {
      ...countries,
    });
    context.commit("setFetchTimestamp");
  },

  async searchCountry(context,payload){
    let countryCode = payload.countryCode;

    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${countryCode}`
    );

    const responseData = await response.json();

    console.log("FETCHED DATA: ", responseData);
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const selectedCountry = responseData;

    context.commit("searchCountry", selectedCountry);

    context.commit("setFetchTimestamp");
  },
};
