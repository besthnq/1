<template>
  <div>
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello Vue~",
    };
  },
};
</script>

<style>
.msg {
  color: pink;
}
</style>
