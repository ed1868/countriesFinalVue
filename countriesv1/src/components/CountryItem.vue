<template>
  <div class="card">
    
      <img class="image thumbnail" v-bind:src="flag" alt="" />
    
    <div>
      <h4 class="textPlacement">
        <b>{{ name }}</b>
      </h4>
      <p class="textPlacement">Population: {{ population }}</p>
      <p class="textPlacement">Region: {{ region }}</p>
      <p class="textPlacement">Capital: {{ capital }}</p>
      <base-button class="buttonPlacement"  link :to="countryDetailLink"
        >View Details</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'name',
    'population',
    'capital',
    'code',
    'region',
    'areas',
    'flag',
    'countryCode',
    'subregion',
    'currency',
    'languages'
  ],
  computed: {
    countryDetailLink() {

console.log('FUCK MAN ')
      return (
        this.$route.path +
        '/' +
        this.countryCode 
      ); 
    }
  },

  
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
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

.textPlacement {
  text-align: center;
}
.buttonPlacement {
  widows: 100%;
}
.card {
  /* Add shadows to create the "card" effect */
  width: 100%;
  /* height: 3=px; */
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
  height: 200px;
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
</style>
