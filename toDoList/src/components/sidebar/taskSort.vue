<script setup>
import { onMounted } from "vue";
import { useTaskStore } from "../../stores/useTaskStore";
const taskStroe = useTaskStore();
onMounted(() => {
  taskStroe.updateTaskCount();
});
const addTask = () => {
  taskStroe.addTask(taskTitle.value, taskContent.value);
};
</script>
<template>
  <!-- 事項分類/start -->
  <div class="bg-white p-3 mb-3 border rounded left-show">
    <h5 class="mb-3">
      <strong>分類</strong>
    </h5>
    <ul class="list-category category">
      <li>
        <a href="/all"
          >所有
          <span class="badge badge-pill badge-secondary ml-2">
            {{ taskStroe.taskCount.all }}
          </span>
        </a>
      </li>
      <li>
        <a href="/complete"
          >已完成
          <span class="badge badge-pill badge-secondary ml-2">
            {{ taskStroe.taskCount.complete }}
          </span>
        </a>
      </li>
      <li>
        <a href="/undone"
          >未完成
          <span class="badge badge-pill badge-secondary ml-2">
            {{ taskStroe.taskCount.undone }}
          </span>
        </a>
      </li>
    </ul>
  </div>
  <!-- 事項分類/end -->
</template>
