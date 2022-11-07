<script setup>
import taskTitle from "./task/taskTitle.vue";
import taskContent from "./task/taskContent.vue";
import taskState from "./task/taskState.vue";
import taskButton from "./task/taskButton.vue";
import { useTaskStore } from "../stores/useTaskStore";
import { useRoute } from "vue-router";
const taskStroe = useTaskStore();
const router = useRoute();
let nowSort = router.params.sort;
if (nowSort == "all" || nowSort == undefined) {
  nowSort = 3;
} else if (nowSort == "undone") {
  nowSort = 0;
} else if (nowSort == "complete") {
  nowSort = 1;
}
</script>

<template>
  <div class="col-12 col-md-8">
    <div class="row">
      <template v-for="(item, index) in taskStroe.task" :key="index">
        <template v-if="item.taskState == nowSort || nowSort == 3">
          <div class="col-12 col-lg-6">
            <div class="card">
              <div class="card-body">
                <taskTitle :index="index" :item="item"></taskTitle>
                <taskContent :index="index" :item="item"></taskContent>
                <taskState :index="index" :item="item"></taskState>
                <taskButton :index="index" :item="item"></taskButton>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
