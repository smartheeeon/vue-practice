<template>
  <div>
    <h2>Child Component</h2>
    <input type="text" v-model="username" />
  </div>
</template>

<script>
export default {
  name: "childComp",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    sayHello() {
      console.log("say Hello");
    },
  },
  beforeCreate() {
    console.log("child before create");
  },
  Created() {
    console.log("child Created");
  },
  beforeMount() {
    console.log("child before Mount");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUpdate() {
    console.log("child before update");
  },
  updated() {
    console.log("child updated");
  },
  beforeUnmount() {
    console.log("child before Unmount");
  },
  unmounted() {
    console.log("child unmounted");
  },
};
</script>

<style></style>
