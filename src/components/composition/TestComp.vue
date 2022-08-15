<template>
  <div>
    <h2>Hello Reusability</h2>
    <FeeStatus />
    <hr />
    <ProductStatus />
    <hr />
    <SavingStatus />
  </div>
</template>

<script>
import FeeStatus from "../mixin/FeeStatus.vue";
import ProductStatus from "../mixin/ProductStatus.vue";
import SavingStatus from "../mixin/SavingStatus.vue";

export default {
  name: "TestComp",
  components: { FeeStatus, ProductStatus, SavingStatus },
  methods: {},
};
</script>

<style></style>
