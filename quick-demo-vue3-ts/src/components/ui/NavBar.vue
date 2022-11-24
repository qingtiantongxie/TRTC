<!-- eslint-disable max-len -->
<template>
  <div class='text-white header'>
   <span>大宝剑虚拟女友平台</span>
   <span>{{store.userId}}</span>
  </div>
</template>
<script lang="ts" setup>
import appStore from '@/store/index';

const store = appStore();

</script>
<style lang="stylus" scoped>
.header
  color white
  height 50px
  line-height 50px
  transparent 10%
  padding-left 10px
  background-color skyblue
  display flex
  justify-content space-between
  padding 0 20px

</style>
