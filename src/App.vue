<template>
  <el-config-provider :size="'mini'" :zIndex="zIndex">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ThemeConfig } from './themeConfig'

const size: string = ThemeConfig.ElementPlusSize
const zIndex: number = ThemeConfig.ElementPlusZIndex
</script>

<style lang="scss">
</style>
