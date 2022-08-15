<template>
  <div>
    <h2>Parent Component</h2>
    <input type="text" v-model="nickname" ref="inputRef" />
    <button @click="consoleRef">console ref</button>
    <hr />
    <ChildComp v-if="showChild" ref="childref" />
    <button @click="showChild = false">unmount child</button>
  </div>
</template>

<script>
import ChildComp from "./ChildComp";
export default {
  name: "parentComp",
  data() {
    return {
      nickname: "",
      showChild: true,
    };
  },
  methods: {
    consoleRef() {
      //this.$refs.inputRef.focus();
      //this.$refs.inputRef.style.border = "2px solid red";

      console.log(this.$refs.inputRef, "input ref");
      console.log(this.$refs.childref, "child ref");

      this.$refs.childref.sayHello(); //부모에서 자식함수 호출
    },
  },
  components: {
    ChildComp,
  },
  beforeCreate() {
    console.log("parent before create");
  },
  Created() {
    console.log("parent Created");
  },
  beforeMount() {
    console.log("parent before Mount");
  },
  mounted() {
    console.log("parent mounted");
  },
  beforeUpdate() {
    //console.log("parent before update");
  },
  updated() {
    //console.log("parent updated");
  },
  beforeUnmount() {
    console.log("parent before Unmount");
  },
  unmounted() {
    console.log("parent unmounted");
  },
};
</script>

<style></style>
