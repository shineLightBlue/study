<script lang="ts" setup>
import {
  HighlightOutlined,
  AlignCenterOutlined,
  StrikethroughOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons-vue";
const props = defineProps<{ icon: string }>();
</script>
<template>
  <highlight-outlined v-if="icon === 'highlight-outlined'"></highlight-outlined>
  <align-center-outlined
    v-else-if="icon === 'align-center-outlined'"
  ></align-center-outlined>
  <strikethrough-outlined
    v-else-if="icon === 'strikethrough-outlined'"
  ></strikethrough-outlined>
  <sort-descending-outlined
    v-else-if="icon === 'sort-descending-outlined'"
  ></sort-descending-outlined>
</template>
