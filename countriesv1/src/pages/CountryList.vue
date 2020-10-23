<template>
  <section>
    <div>
      <div class="row">
        <div class="col-xs-12">
          <search-filter />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 text-center">
          <h1>Countries</h1>
          <br />
        </div>

        <!-- INSERT ONCE READY TO CONNECT API TO FUNCTION -->

        <div
          v-for="country in filteredCountries"
          :key="country.id"
          :id="country.id"
          :name="country.name"
          :region="country.region"
          :areas="country.areas"
          :flag="country.flag"
          :population="country.population"
          :countryCode="country.countryCode"
          :subregion="country.subregion"
          :currency="country.currency"
          :languages="country.languages"
          class="col-lg-3 col-md-4 col-xs-12"
        >
          <country-item
            :key="country.id"
            :id="country.id"
            :name="country.name"
            :areas="country.areas"
            :flag="country.flag"
            :population="country.population"
            :region="country.region"
            :capital="country.capital"
            :countryCode="country.countryCode"
            :subregion="country.subregion"
            :currency="country.currency"
            :languages="country.languages"
            v-bind:src="country.flag"
          >
          </country-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CountryItem from "../components/CountryItem";
// import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CountryItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    filteredCountries() {
      const countries = this.$store.getters["countries/countries"];
      console.log("LOS COUNTRIES,", countries[1]);
      return countries[1];
    },

    filteredRegions() {
      const regions = this.$store.getters["countries/regions"];
      console.log("LOS REGIONS,", regions[1]);
      return regions[1];
    },
  },
  created() {
    this.setCountries();
    this.setRegions();
  },
  methods: {
    async setCountries(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("countries/setCountries", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleErr() {
      this.error = null;
    },
    async setRegions(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("countries/setRegions", {
          forceRefresh: refresh,
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
html {
  box-sizing: border-box;
  background-color: hsl(0, 0%, 98%);
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
  padding: 4px;
  line-height: 1.42857143;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.text-center {
  text-align: center;
}

.image {
  display: block;
  max-width: 100%;
  height: auto;
}

.image--center {
  margin-left: auto;
  margin-right: auto;
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

/* section {

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  /* max-width: 40rem; 
  padding: 1rem;
  border-radius: 12px;
  
} */

/* ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
} */

/* li {
  border-radius: 12px;
  border: 1px solid red;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} */
</style>
