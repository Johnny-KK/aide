<script lang="ts">
import type { DefineComponent } from 'vue'
export default ({ name: 'plus-square' }) as DefineComponent
</script>

<template>
  <i class="aide-icon">
    <svg t="1678158591508" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      p-id="8363" width="200" height="200">
      <path
        d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
        p-id="8364"></path>
      <path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z"
        p-id="8365"></path>
    </svg>
  </i>
</template>


<style lang="less" scoped>
.aide-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: inherit;
  font-size: inherit;
  vertical-align: -2px;
}

.aide-icon>svg {
  height: 1em;
  width: 1em;
}
</style>