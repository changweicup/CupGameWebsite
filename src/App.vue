<template>
  <el-config-provider
   :locale="locale"
    :size="'small'"
    :button="{
      autoInsertSpace: true,
    }">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

const locale = ref(zhCn);
</script>

<style lang="scss">
</style>
