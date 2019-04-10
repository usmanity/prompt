<template>
  <div id="app">
    <Lines/>
  </div>
</template>

<script>
import Lines from "./components/Lines.vue";

export default {
  name: "app",
  components: {
    Lines
  }
};
</script>
<style lang="less">
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}
</style>
