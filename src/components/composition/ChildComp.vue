<template>
  <div>
    <h3>{{ fullName }}</h3>
    <button @click="sendParent">click</button>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ChildComp",
  props: ["firstname", "lastname"],
  setup(props, context) {
    console.log(context);
    const fullName = computed(() => {
      return `${props.firstname} ${props.lastname}`;
    });
    function sendParent() {
      context.emit("sendParent");
    }
    return {
      fullName,
      sendParent,
    };
  },
  //   computed: {
  //     fullName() {
  //       return `${this.firstname} ${this.lastname}`;
  //     },
  //   },
};
</script>

<style></style>
