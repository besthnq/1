<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <img class="logo" src="./assets/images/huge.jpg" alt="logo" />
    <HelloWorld></HelloWorld>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "@comps/HelloWorld";

//使用ES6向外暴露组件配置对象
export default {
  data() {
    return {
      title: "vue练习练习练习，加油~",
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
.title {
  color: darkred;
}
.logo {
  width: 300px;
  height: 300px;
  display: block;
}
</style>
