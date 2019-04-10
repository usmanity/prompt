<template>
  <div class="lines">
    Hello from lines
    <div class="examples">
      <div v-for="prompt in examples" v-bind:key="prompt.config" class="prompt">
        Preview:
        <code>{{ prompt.preview }}</code>
        <button class="copy-to-clipboard" @click="copy(prompt)">Copy to clipboard</button>
      </div>
    </div>
  </div>
</template>
<script>
import simple from "@/prompts/simple";
export default {
  name: "lines",
  data() {
    return {
      examples: []
    };
  },
  methods: {
    copy(prompt) {
      console.log("going to attempt to copy");
      console.log(prompt.config);
      document.execCommand("copy", prompt.config);
      // window.navigator.clipboard.writeText(prompt.config).then(() => {
      //   console.log("Copied!");
      // });
    }
  },
  mounted() {
    console.log("Mounted lines component");
    this.examples.push(simple);
  }
};
</script>
<style>
.lines {
  width: 960px;
  margin: auto;
}
</style>
