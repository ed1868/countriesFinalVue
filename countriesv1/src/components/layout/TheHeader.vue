<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Where in the World?</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/">Dark Mode</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px lightgrey;
  border-top: none;
  border-right: none;
  border-left: none;
}

header a {
  text-decoration: none;
  color: black;
  display: inline-block;
}

h1 {
  margin: 0;
}

h1 a {
  color: black;
  margin: 0;
}

header nav {
  width: 83%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  margin: 0 0.5rem;
}
</style>
