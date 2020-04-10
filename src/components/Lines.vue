<template>
  <div class="lines">
    <div class="examples">
      <div v-for="prompt in examples" v-bind:key="prompt.config" class="prompt">
        <h2>{{ prompt.name }}</h2>
        <div class="description" v-if=prompt.notes>
          <strong>Notes: </strong>{{ prompt.notes }}
        </div>
        <div class="prompt-info">
          <div class="preview-wrapper">
            <span class="border-text">Preview</span>
            <code class="preview">{{ prompt.preview }}</code>
          </div>
          <div class="config-wrapper">
            <span class="border-text">Config</span>
            <code class="config">{{ generatePrompt(prompt) }}</code>
          </div>
        </div>
        <!-- <button class="copy-to-clipboard" @click="copy(prompt)">Copy to clipboard</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import simple from "@/prompts/simple";
import emoji from "@/prompts/emoji";
import directory from "@/prompts/directory";

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
    },
    generatePrompt(prompt) {
      return `PS1="${prompt.config}"`;
    }
  },
  mounted() {
    this.examples.push(simple);
    this.examples.push(emoji);
    this.examples.push(directory);
  }
};
</script>
<style lang="less">
@light-gray: rgba(200, 200, 200, 0.8);
@gray: rgba(150, 150, 150, 1);

.prompt-info {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
}
.preview-wrapper,
.config-wrapper {
  width: 50%;
  border: 1px solid @light-gray;
  margin-right: 10px;
  padding: 20px;
  .border-text {
    background-color: white;
    position: absolute;
    margin-top: -28px;
    margin-left: -10px;
    font-size: 12px;
    padding: 0 6px;
    color: @gray;
  }
}
h2 {
  font-size: 18px;
  font-weight: 400;
}
.description {
  margin-bottom: 20px;
  font-size: 0.8em;
}
</style>

