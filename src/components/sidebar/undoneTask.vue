<script setup>
import { useTaskStore } from "../../stores/useTaskStore";
const taskStroe = useTaskStore();
</script>

<template>
  <!-- 未完成事項/start -->
  <div class="bg-white p-3 mb-3 border rounded left-show">
    <h5 class="mb-3">
      <strong>未完成事項</strong>
    </h5>
    <ul class="list-category">
      <template v-for="(item, index) in taskStroe.task" :key="index">
        <li class="media mb-3" v-if="item.taskState == 0">
          <div class="media-body">
            <div class="mt-0 mb-1 text-truncate" style="max-width: 180px">
              {{ item.title }}
            </div>
            <span class="d-block mt-3 text-secondary icon datetime">
              {{ item.date }}
            </span>
          </div>
        </li>
      </template>
    </ul>
  </div>
  <!-- 未完成事項/end -->
</template>
