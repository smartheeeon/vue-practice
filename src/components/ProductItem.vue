<template>
  <li>
    <p class="title">{{ product.name }}</p>
    <p class="image">
      <img
        :src="`https://placeimg.com/200/100/${product.name}`"
        alt="{{ product.name }}"
      />
    </p>
    <p class="price">{{ product.price }}</p>
  </li>
</template>

<script>
export default {
  name: "product-item",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
li {
  border: 2px solid salmon;
}
.title {
  font-size: 24px;
  color: red;
  font-weight: bold;
}
</style>
