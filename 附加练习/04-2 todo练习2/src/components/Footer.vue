<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelectedAll" />
    </label>
    <span>
      <span>已完成{{ completedLength }}</span> / 全部{{ todos.length }}
    </span>
    <button
      class="btn btn-danger"
      v-show="!!completedLength"
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
    SelectAll: Function,
    delCompleted: Function,
  },
  methods: {
    handleDel() {
      if (window.confirm("确认删除么~~")) {
        this.delCompleted();
      }
    },
  },
  computed: {
    completedLength() {
      let length = 0;
      this.todos.forEach((todo) => {
        if (todo.completed) {
          length++;
        }
      });
      return length;
    },
    isSelectedAll: {
      get() {
        return (
          this.completedLength === this.todos.length && this.completedLength > 0
        );
      },
      set(val) {
        this.SelectAll(val);
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
