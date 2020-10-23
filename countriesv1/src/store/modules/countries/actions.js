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
    const regions = [];

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
      regions.push(country.region);
    }

    context.commit("setCountries", {
      ...countries,
    });
    context.commit("setRegions", {
      ...regions,
    });
    context.commit("setFetchTimestamp");
  },

  async setRegions(context, data) {
    console.log(
      "ALL CONTEXT AND DATA IN SET REGIONS ACTIONS----",
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

    const regions = [];
    for (const key in responseData) {
      const region = {
        region: responseData[key].region,
      };

      regions.push(region);
    }

    context.commit("setRegions", {
      ...regions,
    });
    context.commit("setFetchTimestamp");
  },

  async searchCountry(context, payload) {
    console.log("the payload :", payload.query);
    let countryCode = payload.query;


    if (countryCode.length > 3) {
      let name = countryCode;
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const responseData = await response.json();
      console.log("THE SEARCH RESPONSE IS : ", responseData[0]);

      const selectedCountry = {
        name: responseData[0].name,
        region: responseData[0].region,
        areas: responseData[0].borders,
        flag: responseData[0].flag,
        population: responseData[0].population,
        capital: responseData[0].capital,
        countryCode: responseData[0].alpha2Code,
        languages: responseData[0].languages,
        nativeName: responseData[0].nativeName,
        currency: responseData[0].currencies,
        subRegion: responseData[0].subregion,
      };
      context.commit("searchCountry", {
        ...selectedCountry,
      }); 



      context.commit("setFetchTimestamp");


      
      return selectedCountry;

    } else {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${countryCode}`
      );

      const responseData = await response.json();
      console.log("THE FUCKING RESPONSE:", responseData);
      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch!");
        throw error;
      }


      const selectedCountry = {
        name: responseData.name,
        region: responseData.region,
        areas: responseData.borders,
        flag: responseData.flag,
        population: responseData.population,
        capital: responseData.capital,
        countryCode: responseData.alpha2Code,
        languages: responseData.languages,
        nativeName: responseData.nativeName,
        currency: responseData.currencies,
        subRegion: responseData.subregion,
      };

      context.commit("searchCountry", {
        ...selectedCountry,
      });
      context.commit("setFetchTimestamp");

      return selectedCountry;
  
    }

  


  },
};
