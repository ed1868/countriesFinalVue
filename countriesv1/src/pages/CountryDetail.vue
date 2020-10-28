<template>
  <section>
    <div class="row backRow">
      <div class="col-xs-12">
        <base-back v-on:click="coachDetailsLink" link="/countries">
          <span class="arrow arrow-left"> </span> Back
        </base-back>
      </div>
    </div>

    <div id="detailContainer">
      <div class="row"></div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-xs-6">
          <img
            class="image personalizedImage"
            v-bind:src="printer.flag"
            alt=""
          />
        </div>
        <div class="col-lg-3 col-md-6 col-xs-6">
          <div>
            <h1 class="detailMain">
              <b>{{ printer.name }}</b>
              <p></p>
            </h1>

            <p class="detailInfo">Native Name: {{ printer.nativeName }}</p>
            <p class="detailInfo">Population: {{ printer.population }}</p>
            <p class="detailInfo">Region: {{ printer.region }}</p>
            <p class="detailInfo">Sub Region: {{ printer.subregion }}</p>
            <p class="detailInfo">Capital: {{ printer.capital }}</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-6 right">
          <div>
            <p class="detailInfo">Top Level Domain: {{ printer.name }}</p>
            <p class="detailInfo">Currencies: {{ printer.currency[0].name }}</p>
            <p class="detailInfo">
              Languages: : {{ printer.languages[0].name }}
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-6">
          Border Countries :

          <base-back
            class="borderCountries"
            v-on:click="searchCountry"
            v-for="country in printer.areas"
            :id="country.code"
            :key="country.id"
            :countryCode="country.id"
          >
            {{ country }}
          </base-back>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "population",
    "capital",
    "code",
    "region",
    "areas",
    "flag",
    "countryCode",
    "subregion",
    "currency",
    "languages",
  ],
  data() {
    console.log("EL DATAA-----", this);

    return {
      selectedCode: null,
    };
  },
  computed: {
    printer() {
      const newCountry = this.$store.getters["countries/selectedCountry"];
      console.log('SHIT',newCountry);
      return newCountry[0];

      
    },
  },

  created() {
    this.searchCountry();
  },

  methods: {
    async searchCountry(countryCode = this.countryCode) {
      this.isLoading = true;
      try {
        await this.$store
          .dispatch("countries/searchCountry", {
            countryCode: countryCode,
          })
          .then((country) => {
            console.log("THE COUNTRY CHOSEN IS : ", country);

            console.log(this.state);
            // const result = {
            //   name: country.name,
            //   region: country.region,
            //   areas: country.borders,
            //   flag: country.flag,
            //   population: country.population,
            //   capital: country.capital,
            //   countryCode: country.alpha2Code,
            //   languages: country.languages,
            //   nativeName: country.nativeName,
            //   currency: country.currencies,
            //   subRegion: country.subregion
            // };

            // console.log('THIS IS THE PAYLOAD BACK IN COACH DETAIL : ', result);
            // console.log(
            //   'THIS IS THe SELECTED COUNTRY BACK IN COACH DETAIL : ',
            //   this.selectedCountry
            // );

            // this.selectedCountry.push(result);

            // this.$store.commit('registerCountries');

            // console.log('RIGHT AFTER NIH----', this.$store.state);
            // // this.selectedCountry === result
            // // this.selectedCountry === country
          });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
.backRow {
  padding-top: 50px;
}
#detailContainer {
  padding-top: 100px;
}
.borderCountries {
  margin-top: 20px;
  margin-left: 20px;
}
.container {
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 15px;
  padding-right: 15px; */
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

.detailTitle {
  font-size: 16px;
}

.detailMain {
  font-size: 30px;
  /* padding-bottom: 15px; */
}
.detailInfo {
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: hsl(200, 15%, 8%);
}
.card {
  /* Add shadows to create the "card" effect */
  height: 450px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.thumbnail {
  /* padding: 4px; */
  line-height: 1.42857143;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.text-center {
  text-align: center;
}

.image {
  display: block;
  margin-right: 0;
  padding-right: 100px;
  max-width: 100%;
  height: auto;
}
.right {
  padding-top: 75px;
}
.image--center {
  margin-left: auto;
  margin-right: auto;
}

.arrow {
  display: inline-block;

  width: 10px;
  height: 10px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
}

.arrow-top {
  transform: rotate(-45deg);
}
.arrow-right {
  transform: rotate(45deg);
}
.arrow-bottom {
  transform: rotate(135deg);
}
.arrow-left {
  transform: rotate(-135deg);
}
.arrow-top-narrow {
  transform: rotate(-45deg) skew(-15deg, -15deg);
}
.arrow-top-wide {
  transform: rotate(-45deg) skew(7deg, 7deg);
}
.arrow-top-left {
  transform: rotate(-90deg) skew(-10deg, -10deg);
}
.arrow-top-right {
  transform: rotate(0) skew(-10deg, -10deg);
}
.arrow-bottom-left {
  transform: rotate(180deg) skew(-10deg, -10deg);
}
.arrow-bottom-right {
  transform: rotate(90deg) skew(-10deg, -10deg);
}

/* GRID */

/* CONTAINER */

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

/* ROW */
.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
}

.col-xs-12 {
  grid-column: span 12;
}

.col-xs-11 {
  grid-column: span 11;
}

.col-xs-10 {
  grid-column: span 10;
}

.col-xs-9 {
  grid-column: span 9;
}

.col-xs-8 {
  grid-column: span 8;
}

.col-xs-7 {
  grid-column: span 7;
}

.col-xs-6 {
  grid-column: span 6;
}

.col-xs-5 {
  grid-column: span 5;
}

.col-xs-4 {
  grid-column: span 4;
}

.col-xs-3 {
  grid-column: span 3;
}

.col-xs-2 {
  grid-column: span 2;
}

.col-xs-1 {
  grid-column: span 1;
}

@media (min-width: 768px) {
  .col-sm-12 {
    grid-column: span 12;
  }

  .col-sm-11 {
    grid-column: span 11;
  }

  .col-sm-10 {
    grid-column: span 10;
  }

  .col-sm-9 {
    grid-column: span 9;
  }

  .col-sm-8 {
    grid-column: span 8;
  }

  .col-sm-7 {
    grid-column: span 7;
  }

  .col-sm-6 {
    grid-column: span 6;
  }

  .col-sm-5 {
    grid-column: span 5;
  }

  .col-sm-4 {
    grid-column: span 4;
  }

  .col-sm-3 {
    grid-column: span 3;
  }

  .col-sm-2 {
    grid-column: span 2;
  }

  .col-sm-1 {
    grid-column: span 1;
  }
}

@media (min-width: 992px) {
  .col-md-12 {
    grid-column: span 12;
  }

  .col-md-11 {
    grid-column: span 11;
  }

  .col-md-10 {
    grid-column: span 10;
  }

  .col-md-9 {
    grid-column: span 9;
  }

  .col-md-8 {
    grid-column: span 8;
  }

  .col-md-7 {
    grid-column: span 7;
  }

  .col-md-6 {
    grid-column: span 6;
  }

  .col-md-5 {
    grid-column: span 5;
  }

  .col-md-4 {
    grid-column: span 4;
  }

  .col-md-3 {
    grid-column: span 3;
  }

  .col-md-2 {
    grid-column: span 2;
  }

  .col-md-1 {
    grid-column: span 1;
  }
}

@media (min-width: 1200px) {
  .col-lg-12 {
    grid-column: span 12;
  }

  .col-lg-11 {
    grid-column: span 11;
  }

  .col-lg-10 {
    grid-column: span 10;
  }

  .col-lg-9 {
    grid-column: span 9;
  }

  .col-lg-8 {
    grid-column: span 8;
  }

  .col-lg-7 {
    grid-column: span 7;
  }

  .col-lg-6 {
    grid-column: span 6;
  }

  .col-lg-5 {
    grid-column: span 5;
  }

  .col-lg-4 {
    grid-column: span 4;
  }

  .col-lg-3 {
    grid-column: span 3;
  }

  .col-lg-2 {
    grid-column: span 2;
  }

  .col-lg-1 {
    grid-column: span 1;
  }
}
</style>
