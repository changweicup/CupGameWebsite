<template>
  <div class="menu-item-wrap" v-for="item in menuList" :key="item.path">
    <transition name="el-fade-in-linear">
      <el-sub-menu
        v-if="item.children && item.children.length > 0 && !commonStore.isCollapse"
        :key="item.name"
        :index="item.name"
      >
        <template #title>
          <Icon :name="item.icon" size="18"></Icon>
          <span class="el-menu-item-title">{{ item.title }}</span>
        </template>
        <template v-for="subItem in item.children" :key="subItem.path">
          <el-menu-item
            :index="subItem.path"
            :class="route.path === subItem.path ? 'is-active' : ''"
            @click="handleMenuClick(subItem)"
          >
            <template #title>
              <Icon :name="subItem.icon" size="18" style="margin-left: 5px;"></Icon>
              <span class="el-menu-item-title" v-show="!commonStore.isCollapse">{{ subItem.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-sub-menu>
    </transition>
    <transition name="el-fade-in-linear">
      <el-menu-item
        v-if="!item.children || item.children.length === 0"
        :key="item.path"
        :index="item.path"
        :class="route.path === item.path ? 'is-active' : ''"
        @click="handleMenuClick(item)"
      >
        <template #title>
          <Icon :name="item.icon" size="18"></Icon>
          <span class="el-menu-item-title" v-show="!commonStore.isCollapse">{{ item.title }}</span>
        </template>
      </el-menu-item>
    </transition>

    <template v-if="item.children && item.children.length > 0 && commonStore.isCollapse">
      <el-popover :key="item.name" placement="right-start" :width="200" trigger="hover">
        <template #reference>
          <el-menu-item :key="item.path" :index="item.path">
            <template #title>
              <Icon v-if="item.icon" :name="item.icon" size="18"></Icon>
            </template>
          </el-menu-item>
        </template>
        <div
          v-for="ele in item.children"
          :key="ele.path"
          class="icon-menu-detail-item icon-active"
          @click="handleMenuClick(ele)"
        >
          <Icon v-if="ele.icon" :name="ele.icon" size="18"></Icon>
          <span class="icon-menu-title el-menu-item-title">{{ ele.title }}</span>
        </div>
      </el-popover>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { RouteLocationRaw, useRouter, useRoute } from 'vue-router'
import { MenuRecordRaw } from '../../router/menu'
import Icon from '@/components/Icon/index.vue'
import { useCommonStore } from '@/stores/modules/commonStore'

defineProps({
  menuList: {
    type: Array as () => Array<MenuRecordRaw>,
    default: () => []
  }
})

const commonStore = useCommonStore()
const router = useRouter()
const route = useRoute()

const handleMenuClick = (item: { path: RouteLocationRaw }) => {
  if (item.path) {
    router.push(item.path)
  }
}

</script>
<style scoped lang="scss">
:deep(.el-menu--inline) {
  background: #fafafa;
}
:deep(.menu-item-wrap) {
  box-sizing: border-box;
}
:deep(.el-menu-item.is-active) {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  border-radius: 10px;
}
:deep(.el-menu-item:hover) {
  border-radius: 10px;
}
:deep(.el-menu-item) {
  height: 48px;
  line-height: 48px;
  margin: 3px;
  box-sizing: border-box;
}
:deep(.el-sub-menu__title) {
  height: 48px;
  line-height: 48px;
  margin: 0 3px;
}
:deep(.el-sub-menu__title:hover) {
  border-radius: 10px;
}
.icon-sub-menu {
  display: flex;
  justify-content: center;
  height: 48px;
  line-height: 48px;
  cursor: pointer;
}

.icon-menu-item {
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 48px;
  line-height: 48px;
}

.icon-menu-detail-item {
  display: flex;
  box-sizing: border-box;
  padding: 0 15px;
  cursor: pointer;
  height: 48px;
  line-height: 48px;
}

.icon-active:hover {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  border-radius: 10px;
}

</style>
