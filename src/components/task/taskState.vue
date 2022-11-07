<script setup>
const props = defineProps({
  item: {
    default: {},
  },
  index: {
    default: "",
  },
});
</script>

<template>
  <template v-if="props.item.editState == 1">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        :name="`taskState${props.index}`"
        :checked="props.item.taskState == 0"
        value="0"
      />
      <label class="form-check-label"> 未完成 </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        :name="`taskState${props.index}`"
        :checked="props.item.taskState == 1"
        value="1"
      />
      <label class="form-check-label"> 已完成 </label>
    </div>
  </template>
  <!-- 日期/start -->
  <div class="d-flex justify-content-between">
    <span class="d-block text-secondary mt-4 icon datetime">{{
      props.item.date
    }}</span>
    <i
      class="fas fa-check d-block text-secondary text-success ml-2 mt-4"
      v-if="props.item.taskState == 1"
      >已完成</i
    >
    <i
      class="fas fa-times d-block text-danger text-success ml-2 mt-4"
      v-if="props.item.taskState == 0"
      >未完成</i
    >
  </div>
  <!-- 日期/end -->
</template>
