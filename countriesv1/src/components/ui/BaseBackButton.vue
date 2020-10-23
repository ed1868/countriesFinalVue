<template>
  <button :id="id" v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: true,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: transparent;
  box-shadow: black;
  border: 1px solid gray;
  font-size: 16px;
  border-radius: 5px;
  width: 120px;
  height: 40px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous {
  background-color: #f1f1f1;
  color: black;
}

.next {
  background-color: #4caf50;
  color: white;
}

.round {
  border-radius: 50%;
}
</style>
