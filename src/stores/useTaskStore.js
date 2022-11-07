import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useTaskStore = defineStore('task', () => {
  const task = ref([]);
  const sidebarTask = ref([JSON.parse(localStorage.getItem('task'))]);
  const taskCount = ref({
    all: 0,
    complete: 0,
    undone: 0
  });
  const getDate = () => {
    let today = new Date();
    return today.getFullYear() + " 年 " + (today.getMonth() + 1) + " 月 " + today.getDate() + " 日 " + (today.getHours()) + ' 時 ' + (today.getMinutes()) + ' 分 '
  }
  const addTask = (title, content, date = getDate()) => {
    Swal.fire({
      title: '你確定要新增嗎?',
      text: '按下確定會新增待辦事項',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定',
      cancelButtonText: "取消 ",
    }).then((result) => {
      if (result.isConfirmed) {
        task.value.push({ title: title, content: content, date: date, taskState: 0, editState: 0 });
        title = "";
        content = "";
        $("#exampleModal").modal("hide");
        updateTaskCount()
      }
    });
  };
  const deleteTask = (id) => {
    Swal.fire({
      title: '你確定要刪除嗎?',
      text: '按下確定待辦事項會永久刪除',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定',
      cancelButtonText: "取消 ",
    }).then((result) => {
      if (result.isConfirmed) {
        task.value.splice(id, 1);
        updateTaskCount()

      }
    });
  }
  const openEditTask = (id) => {
    task.value[id].editState = 1
  }
  const editTask = (id, title, content, taskState, date = getDate()) => {
    Swal.fire({
      title: '你確定要更改嗎?',
      text: '按下確定待辦事項會更改內容',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定',
      cancelButtonText: "取消 ",
    }).then((result) => {
      if (result.isConfirmed) {
        task.value[id].title = title
        task.value[id].content = content
        task.value[id].date = date
        task.value[id].taskState = taskState
        task.value[id].editState = 0
        updateTaskCount()
      }
    });
  }
  const updateTaskCount = () => {
    taskCount.value.all = 0;
    taskCount.value.complete = 0;
    taskCount.value.undone = 0;
    task.value.forEach(function (obj, key) {
      if (obj.taskState == 0) {
        taskCount.value.undone += 1;
      } else {
        taskCount.value.complete += 1;
      }
      taskCount.value.all += 1;
    });
    sidebarTask.value = [JSON.parse(localStorage.getItem('task'))];
  };

  return { task, sidebarTask, taskCount, addTask, deleteTask, openEditTask, editTask, updateTaskCount }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'task', // 存储的 key 值，默认为 storeId
        storage: localStorage, // 存储的位置，默认为 sessionStorage
        paths: ['task'], // 需要存储的 state 状态，默认存储所有的状态
      }
    ]
  }
})