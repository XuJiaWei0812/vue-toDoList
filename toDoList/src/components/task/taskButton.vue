<script setup>
import { useTaskStore } from "../../stores/useTaskStore";
const taskStroe = useTaskStore();
const props = defineProps({
  item: {
    default: {},
  },
  index: {
    default: "",
  },
});
const editTask = (id) => {
  taskStroe.editTask(
    id,
    document.getElementById(`title${id}`).value,
    document.getElementById(`content${id}`).value,
    document.querySelector(`input[name=taskState${id}]:checked`).value
  );
};
</script>

<template>
  <!-- 編輯&刪除/start -->
  <div class="d-flex justify-content-center">
    <button
      type="button"
      class="btn btn-link card_button"
      name="edit"
      v-if="props.item.editState == 0"
      @click="taskStroe.openEditTask(props.index)"
    >
      <i class="fas fa-edit fa-2x text-warning"></i>
    </button>
    <button
      type="button"
      class="btn btn-link card_button"
      name="exit_success"
      v-if="props.item.editState == 1"
      @click="editTask(props.index)"
    >
      <i class="far fa-check-square fa-2x ml-3 text-success"></i>
    </button>
    <button
      type="button"
      class="btn btn-link card_button"
      name="delete"
      v-if="props.item.editState == 0"
      @click="taskStroe.deleteTask(props.index)"
    >
      <i class="fas fa-trash-alt fa-2x ml-3 text-danger" name="delete"></i>
    </button>
  </div>
  <!-- 編輯&刪除/end -->
</template>
