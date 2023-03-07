<script setup lang="ts">
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import DocTree from './doc-tree.vue'
import hook from './use-doc'

const { index, content, loadContent } = hook();
</script>

<template>
  <div class="layout">
    <doc-tree :tree="index" @doc-click="loadContent"></doc-tree>
    <md-editor class="md-editor" v-model="content" />
  </div>
</template>

<style lang="less" scoped>
.layout {
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  padding: 20px;

  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 10px;

  &>.doc-tree {
    background-color: antiquewhite;
  }

  &>.md-editor {
    height: 100%;
  }
}
</style>
