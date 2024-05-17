<template>
    <a-row>
        <a-col :span="2">
            <a-button type="primary" size="small">新增</a-button>
        </a-col>
        <a-col :span="4">
            <a-popconfirm title="确认要删除选中学生吗?" ok-text="确定" cancel-text="取消" @confirm="onDeleteIds"
                @visibleChange="onVisibleChange" :visible="visible">
                <a-button type="primary" size="small">删除选中</a-button>
            </a-popconfirm>
        </a-col>
        <a-col :span="4"> </a-col>
        <a-col :span="4">
            <a-input v-model:value="dto.name" placeholder="输姓名" size="small"></a-input>
        </a-col>
        <a-col :span="4">
            <a-select v-model:value="dto.sex" placeholder="选性别" :allowClear="true" size="small">
                <a-select-option value="男">男</a-select-option>
                <a-select-option value="女">女</a-select-option>
            </a-select>
        </a-col>
        <a-col :span="4">
            <a-select v-model:value="dto.age" placeholder="选年龄" :allowClear="true" size="small">
                <a-select-option value="0,20">20以下</a-select-option>
                <a-select-option value="21,30">21~30</a-select-option>
                <a-select-option value="31,40">31~40</a-select-option>
                <a-select-option value="40,120">40以上</a-select-option>
            </a-select>
        </a-col>
        <a-col :span="2">
            <a-button @click="tableChange" type="primary" size="small">搜索</a-button>
        </a-col>
    </a-row>
    <hr />
    <a-table :columns="columns" :data-source="students" row-key="id" :pagination="pagination" @change="tableChange"
        :row-selection="{ selectedRowKeys: ids, onChange: onSelectChange }">
        <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'name'">
                {{ record.name + (record.sex === '男' ? '(大侠)' : '(女侠)') }}
            </template>
            <template v-else-if="column.dataIndex === 'operation'">
                <a>修改</a>
                <a-divider type="vertical"></a-divider>
                <a-popconfirm title="确认要删除该学生吗?" ok-text="确定" cancel-text="取消" @confirm="onDelete(record.id)">
                    <a>删除</a>
                </a-popconfirm>
            </template>
        </template></a-table>
</template>
  
<script setup lang="ts">
import axios from "../api/request";
import { usePagination, useRequest } from "vue-request";
import { ref, computed } from "vue";
import { PaginationProps } from "ant-design-vue";
const dto = ref({ page: 1, size: 5, name: '', sex: null, age: null })
const ids = ref<number[]>([])
const { data, total, run: search } = usePagination(
    (d) => axios.get("/api/students/q", { params: d }),
    {
        defaultParams: [dto.value],
        pagination: {
            currentKey: "page",
            pageSizeKey: "size",
            totalKey: "data.data.total",
        },
    }
);
// 在页号或页大小改变时调用
function tableChange(pagination: PaginationProps) {
    dto.value.page = pagination.current ?? 1;
    dto.value.size = pagination.pageSize ?? 5;
    search(dto.value);
}
const pagination = computed<PaginationProps>(() => {
    return {
        current: dto.value.page, // 当前页
        pageSize: dto.value.size, // 页大小
        total: total.value, // 总记录数
        showSizeChanger: true, // 显示页大小的下拉列表
        pageSizeOptions: ["3", "2", "3", "4", "5"], // 自定义下拉列表内容
    };
});
const students = computed(() => {
    return data.value?.data.data.list || [];
});
function onSelectChange(keys: number[]) {
    console.log(keys)
    ids.value = keys
}
const visible = ref(false)
function onVisibleChange(v: boolean) {
    console.log(v)
    if (!v) {
        // 希望隐藏
        visible.value = false
    } else {
        // 希望显示
        visible.value = ids.value.length > 0
    }
}
async function onDelete(id: number) {
    await deleteById(id)
    search(dto.value)
}
async function onDeleteIds() {
    await deleteByIds(ids.value)
    ids.value = []
    search(dto.value)
}
const { runAsync: deleteByIds } = useRequest(
    ids => axios.delete('/api/students', { data: ids }),
    {
        manual: true,
    }
)
const { runAsync: deleteById } = useRequest(
    id => axios.delete(`/api/students/${id}`),
    {
        manual: true,
    }
)
const columns = ref([
    {
        title: "编号",
        dataIndex: "id",
    },
    {
        title: "姓名",
        dataIndex: "name",
    },
    {
        title: "性别",
        dataIndex: "sex",
    },
    {
        title: "年龄",
        dataIndex: "age",
    },
    {
        title: '操作',
        dataIndex: 'operation',
    },
]);
</script>
  
<style scoped>
.ant-input,
.ant-select {
    width: 80px;
}
</style>
  