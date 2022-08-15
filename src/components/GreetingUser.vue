<template>
  <div>
    <h2 v-bind="$attrs">Hello {{ username }}!!!</h2>
    <h3>오늘이 {{ numberOfVisit }} 번째 방문 입니다.</h3>
    <h3>Site이름은 {{ siteInfo.name }} 입니다.</h3>
  </div>
</template>

<script>
export default {
  name: "GreetingUser",
  inheritAttrs: false, //자동상속 false
  props: {
    username: String,
    // username: {
    //   type: String,
    //   default: "user!!",
    // },
    numberOfVisit: {
      type: Number,
      default: 0,
    },
    siteInfo: {
      type: Object,
      default: () => {
        return { name: "-", teacher: "-" };
      },
    },
  },
};
</script>

<style scoped></style>
