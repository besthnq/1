<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <AddComment :addComment="addComment" />
      <CommentList :comments="comments" :delComment="delComment" />
    </div>
  </div>
</template>

<script>
import AddComment from "@comps/AddComment";
import CommentList from "@comps/CommentList";

export default {
  data() {
    return {
      comments: [
        { id: 1, name: "jack", content: "i love rose~" },
        { id: 2, name: "rose", content: "i love jack~" },
      ],
    };
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment);
    },
    delComment(id) {
      this.comments = this.comments.filter((comment) => comment.id !== id);
    },
  },
  components: {
    AddComment,
    CommentList,
  },
};
</script>

<style scoped></style>
