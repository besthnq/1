<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :updateTodo="updateTodo" :delTodo="delTodo" />
      <Footer
        :todos="todos"
        :SelectAll="SelectAll"
        :delCompleted="delCompleted"
      />
    </div>
  </div>
</template>

<script>
import Header from "@comps/Header";
import List from "@comps/List";
import Footer from "@comps/Footer";

export default {
  data() {
    return {
      // todos: [
      //   { id: 1, name: "抽烟", completed: false },
      //   { id: 2, name: "喝酒", completed: false },
      //   { id: 3, name: "烫头", completed: false },
      // ],
      todos: JSON.parse(window.localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    updateTodo(id, completed) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.completed = completed;
    },
    delTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
    },
    addTodo(name) {
      this.todos.unshift({ id: Date.now(), name, completed: false });
    },
    SelectAll(isSelectAll) {
      this.todos.forEach((todo) => {
        todo.completed = isSelectAll;
      });
    },
    delCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(val) {
        window.localStorage.setItem("todos", JSON.stringify(val));
      },
    },
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
