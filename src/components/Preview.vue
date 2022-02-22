

<template>
  <div class="doc-preview">
      <div  class="preview-toolbar">
      <h3   class="preview-toolbar_desc">{{moduleName}}</h3>
      <span class="preview-toolbar_btn" >
      <span >复制代码</span>
      <span @click="showSourceCode">查看代码</span>  
      </span>
    </div>
    <section>
      <slot></slot>
    </section>
    <div v-show="codeVisible" class="source-code">
      <pre class="language-html"><code class="language-html">{{ previewSourceCode }}</code></pre>
    </div>
  </div>
</template>

<script>

const isDev = import.meta.env.MODE === 'development';
export default {
  props: {
    /** 组件名称 */
    compName: {
      type: String,
      default: '',
      require: true,
    },
    /** 要显示代码的组件 */
    demoName: {
      type: String,
      default: '',
      require: true,
    },
    /**模块名称 */
    moduleName: {
      type: String,
      default: '',
      require: true,
    },
  },
  data() {
    return {
      sourceCode: '',
      codeVisible: false,
    };
  },
  computed: {
    previewSourceCode() {
      return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g, ``);
    },
  },
  async mounted() {
    if (this.compName && this.demoName) {
      if (isDev) {
        this.sourceCode = (
        // 加注释为让rollup正常动态引入组件
          await import(/* @vite-ignore */ `../../packages/${this.compName}/example/${this.demoName}.vue?raw`)
        ).default;
      } else {
        // packages前加上仓库名，解决404
        this.sourceCode = await fetch(`/web-doc/packages/${this.compName}/example/${this.demoName}.vue`).then((res) => res.text());
      }
    }
    await this.$nextTick();
    Prism.highlightAll();

  },
  methods: {
    async copyCode() {
      // this.$copyText(this.sourceCode);
    },
    showSourceCode() {
      this.codeVisible = !this.codeVisible;
    },
    onSuccess() {
      alert('复制成功')
    },
  },
};
</script>

<style lang="less">
pre {
  line-height: 0;
}
.doc-preview {
  border: 4px;
  border: 1px solid var(--doc-color-border);
  padding: 10px;
  border-radius: 4px;
  border-bottom: 1px solid var(--doc-color-border);
  margin: 20px 0;
  section {
    margin: 15px 0px;
  }
}


.language-html {
  margin: 0;
  padding: 0 15px;
}
.preview-toolbar {

  cursor: pointer;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--doc-color-border);
  padding-bottom: 10px;
  user-select: none;
  .preview-toolbar_desc{
    color: var(--doc-color-text);
    
  }
  .preview-toolbar_btn{
    color: var(--doc-color-primary);
    span{
      margin: 0 10px;
    }
  }
}

</style>
