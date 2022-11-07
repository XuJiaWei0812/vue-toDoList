<script setup>
import { ref, watch } from "vue";
import { useTaskStore } from "../../stores/useTaskStore";
import { useRouter } from "vue-router";
const taskStroe = useTaskStore();
const taskTitle = ref();
const taskContent = ref();
const router = useRouter();

const addTask = () => {
  taskStroe.addTask(taskTitle.value, taskContent.value);
  watch(taskStroe.task, (newValue, oldValue) => {
    taskTitle.value = "";
    taskContent.value = "";
  });
};
</script>

<template>
  <!-- 新增事項視窗/start! -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增事項</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="addTask" method="post">
          <div class="modal-body">
            <div class="form-group">
              <input
                required
                type="text"
                class="form-control my-3"
                placeholder="輸入事項標題"
                v-model="taskTitle"
              />
            </div>
            <div class="form-group">
              <textarea
                required
                class="form-control"
                rows="3"
                placeholder="輸入事項內容"
                name="content"
                v-model="taskContent"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">新增</button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- 新增事項視窗/end -->
</template>
