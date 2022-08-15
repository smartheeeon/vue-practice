<template>
  <div>
    <h2>Hello</h2>
    <TestComp />
  </div>
</template>

<script>
import TestComp from "./components/composition/TestComp.vue";
export default {
  name: "App",
  components: { TestComp },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  directives: {},
  methods: {},
};
</script>

<style scoped></style>
