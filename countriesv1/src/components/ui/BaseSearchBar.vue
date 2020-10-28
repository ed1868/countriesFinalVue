<template>
  <div class="searchBar">
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !query.isValid }">
        <input
          type="text"
          id="countryQuery"
          v-model.trim="query.val"
          @blur="clearValidity('query')"
        />
      </div>
      <button><i class="fa fa-caret-down dropIcon"></i></button>
    </form>

    <div class="filter-right dropdown">
      <button class="dropbtn">
        Filter by Region <i class="fa fa-caret-down dropIcon"></i>
      </button>
      <div class="dropdown-content">
        <li v-for="region in filteredRegions" :key="region.id"></li>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 1</a></li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: {
        val: "",
        isValid: true,
      },
    };
  },
  methods: {
    saveData(data) {
      console.log("ENTRO EN DATA PAPAPAAA", data);
      const response = this.$store.dispatch("countries/searchCountry", data);
      console.log(response);
      const newCountry = this.$store.getters["countries/selectedCountry"];

      console.log(" THAT NEW NEW NIH", newCountry);

      if (newCountry != undefined) {
        console.log("1 OUT OF 2 BABY BOY : ", newCountry[0]);
        console.log("once");
        // this.$route.path + "/" + this.newCountry.alpha2code;
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.query.val === "") {
        this.query.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      console.log("THE TRYING TO SUBMIT THE FORM THO");
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }

      const queryData = {
        query: this.query.val,
      };
      console.log("THIS QUERY SHIT", queryData);

      this.saveData(queryData);
      // we need a return function here
    },
  },
};
</script>

<style>
.searchBar {
  padding-top: 30px;
}
.dropIcon {
  padding-left: 10px;
}
/* Style the links inside the navigation bar */
.searchBar a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Right-aligned section inside the top navigation */
.filter-right {
  float: right;
}

.dropbtn {
  background-color: white;
  color: black;
  padding: 16px;
  font-size: 14px;
  border-color: transparent;
  border-radius: 5px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;

  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  /* z-index: 1; */
}

/* Links inside the dropdown */
.dropdown-content a {
  width: 100%;
  color: black;
  font-size: 14px;
  text-decoration: none;
  display: inline;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
  width: 100%;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
/* .dropdown:hover .dropbtn {background-color: #3e8e41;} */
</style>
