<template>
  <div>
    <h1>
      <p class="title">{{ title }}</p>
    </h1>
    <img src="./assets/images/huge.jpg" alt="huge" />
    <HelloVue />
    <HelloVue></HelloVue>
  </div>
</template>
<script>
import HelloVue from "@comps/HelloVue";
export default {
  data() {
    return {
      title: "组件练习~~",
    };
  },
  components: {
    HelloVue,
  },
};
</script>

<style>
.title {
  background-color: darkred;
  font-size: 30px;
}
</style>
