<template>
  <div class="col-md-4">
    <form class="form-horizontal" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>用户名</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          placeholder="用户名"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          v-model="content"
          class="form-control"
          rows="6"
          placeholder="评论内容"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default pull-right">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    addComment: Function,
  },
  data() {
    return {
      name: "",
      content: "",
    };
  },

  methods: {
    handleSubmit() {
      const name = this.name.trim();
      const content = this.content.trim();
      if (!name || !content) {
        alert("输入内容不能为空~~");
        return;
      }

      this.addComment({ id: Date.now(), name, content });
      this.name = this.content = "";
    },
  },
};
</script>

<style scoped></style>
