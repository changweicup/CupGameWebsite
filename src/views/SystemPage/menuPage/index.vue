<template>
  <el-space fill wrap direction="horizontal" style="width: 100%">
    <PageCard>
      <QueryFilter @loadData="handleData" />
    </PageCard>
    <PageCard>
      <div class="table-box">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="date" label="Date" width="150" />
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="120" />
          <el-table-column prop="address" label="Address" />
          <el-table-column prop="zip" label="Zip" width="120" />
          <el-table-column fixed="right" label="Operations" width="120">
            <template #default="scope">
              <el-button type="text" size="small" @click.prevent="deleteRow(scope.$index)">Remove</el-button>
            </template>
          </el-table-column>
          <template #empty>
            <el-empty description="description"></el-empty>
          </template>
        </el-table>
      </div>
      <el-scrollbar>
        <div class="pagination-box">
          <el-pagination background layout="total, sizes, prev, pager, next" :total="1000"></el-pagination>
        </div>
      </el-scrollbar>
    </PageCard>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import QueryFilter from './queryFilter.vue';
import { ElLoading, ElMessage } from 'element-plus';
import { filterItem } from '.';

const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]);

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const handleData = (filterItem: filterItem) => {
  const loadingInstance = ElLoading.service({ target: '.el-table__body' });
  console.log(filterItem);
  setTimeout(() => {
    ElMessage.success('查询成功');
    loadingInstance.close();
  }, 2000);
}

</script>
<style lang="scss" scoped>
.pagination-box {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
}
</style>
