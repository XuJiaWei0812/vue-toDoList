<script setup>
import addTaskButton from "./sidebar/addTaskButton.vue";
import addTaskModal from "./sidebar/addTaskModal.vue";
import undoneTask from "./sidebar/undoneTask.vue";
import taskSort from "./sidebar/taskSort.vue";
</script>

<template>
  <!-- 側邊欄/start -->
  <div class="col-12 col-md-4">
    <addTaskButton></addTaskButton>
    <addTaskModal></addTaskModal>
    <undoneTask></undoneTask>
    <taskSort></taskSort>
  </div>
  <!-- 側邊欄/end -->
</template>
