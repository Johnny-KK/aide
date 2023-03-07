<script setup lang="ts">
import { DocIndex } from './use-doc'
import { PlusSquare } from '../components'
import { computed } from 'vue';

const props = defineProps<{ tree: DocIndex }>()
const emits = defineEmits<{ (e: 'doc-click', value: string): void }>()
const tree = computed<DocIndex>(() => props.tree)


</script>

<template>
  <section class="doc-tree">
    <div class="doc-tree__title">
      <span>NOTEBOOK</span>
      <PlusSquare class="operate"></PlusSquare>
    </div>
    <div class="doc-tree__item" v-for="item in tree.nodes" :key="item.name" @click="emits('doc-click', item.name)">
      <span>{{ item.name }}</span>
    </div>
    <div class="doc-tree__status"></div>
  </section>
</template>

<style lang="less" scoped>
.doc-tree {

  .operate {
    cursor: pointer;
  }

  &__title {
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    font-weight: 900;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  &__item {
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    cursor: pointer;

    &:hover {
      background-color: azure;
    }
  }

  &__status {}
}
</style>