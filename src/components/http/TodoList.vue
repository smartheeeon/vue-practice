<template>
  <div>
    <h2>TodoList</h2>
    <button @click="getTodoList">Request Todo</button>
    <ul>
      <li v-for="todo in tdList" :key="todo.id">{{ todo.title }}</li>
    </ul>

    <div>
      <label for="todo">할일</label>
      <input type="text" v-model="todoItem.title" />
      <button @click="createTodo">전송 저장</button>
    </div>

    <p v-if="errorMsg">{{ errorMsg }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "todoList",
  data() {
    return {
      todoItem: {
        title: "",
        complete: false,
      },
      tdList: [],
      errorMsg: "",
    };
  },
  methods: {
    getTodoList() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .get(url)
        .then((res) => (this.tdList = res.data))
        .catch((e) => {
          console.log(e);
          this.errorMsg = "에러가 발생했습니다";
        });
    },
    createTodo() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .post(url, this.todoItem)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style></style>
