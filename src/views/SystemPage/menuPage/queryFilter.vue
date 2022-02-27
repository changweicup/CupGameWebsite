<template>
  <div class="query-filter-box">
    <div class="query-form">
      <el-form :inline="true" ref="formRef" :model="formItem" class="demo-form-inline">
        <el-form-item label="Approved by">
          <el-input v-model="formItem.user" placeholder="Approved by"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formItem.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Approved by">
          <el-input v-model="formItem.user" placeholder="Approved by"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formItem.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Approved by">
          <el-input v-model="formItem.user" placeholder="Approved by"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formItem.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Approved by">
          <el-input v-model="formItem.user" placeholder="Approved by"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formItem.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="query-actions">
      <el-button type="primary" @click="onSubmit(formRef)">查询</el-button>
      <el-button type="default" @click="onSubmit(formRef)">清空</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { filterItem } from '.';
import type { ElForm } from 'element-plus'

type FormInstance = InstanceType<typeof ElForm>
const formRef = ref<FormInstance>()

const formItem:filterItem = reactive({
  user: '',
  region: '',
})

const emit = defineEmits(['loadData'])

const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
       emit('loadData', formItem);
    } else {
      return false
    }
  })
}

</script>
<style lang="scss" scoped>
.query-filter-box {
  display: flex;
  width: 100%;
}
.query-actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 10%;
}
.query-form {
  width: 90%;
}
.el-form-item {
  margin-bottom: 10px;
}
</style>
