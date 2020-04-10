<template>
  <div id="app">
    <h1>
      To use,  copy to your
      <code>.bashrc</code> file, open a new session in your terminal
    </h1>
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
#app {
  width: 960px;
  margin: auto;
}
h1 {
  font-size: 24px;
  font-weight: 420;
}
code {
  font-family: "SF Mono", monospace;
}
</style>
