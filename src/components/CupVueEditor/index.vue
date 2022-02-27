<template>
  <div class="quill-editor">
    <QuillEditor :modules="modules" toolbar="full" />
  </div>
</template>

<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { ImageDrop } from 'quill-image-drop-module';


const modules = [{
  name: 'blotFormatter',
  module: BlotFormatter,
  options: {/* options */ }
}, {
  name: 'ImageDrop',
  module:ImageDrop,
  options: {/* options */ }
}]
</script>

<style lang="scss">
.ql-editor {
  /* 重置默认样式 */
  strong {
    font-weight: bold !important;
  }
  em {
    font-style: italic !important;
  }
}
</style>