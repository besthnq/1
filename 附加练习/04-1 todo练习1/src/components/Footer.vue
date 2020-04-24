<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelectAll" />
    </label>
    <span>
      <span>已完成{{ compeletedLength }}</span> / 全部{{ todos.length }}
    </span>
    <button
      class="btn btn-danger"
      v-show="!!compeletedLength"
      @click="handleDel"
    >
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    selectedAll: Function,
    delCompeletedTodo: Function,
  },
  methods: {
    handleDel() {
      if (window.confirm("确认删除么~~")) {
        this.delCompeletedTodo();
      }
    },
  },
  computed: {
    compeletedLength() {
      let length = 0;
      this.todos.forEach((todo) => {
        if (todo.completed) {
          length++;
        }
      });
      return length;
    },
    isSelectAll: {
      get() {
        return (
          this.compeletedLength === this.todos.length &&
          this.compeletedLength > 0
        );
      },
      set(val) {
        this.selectedAll(val);
      },
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
