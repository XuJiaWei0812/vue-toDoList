<script setup>
import task from "../components/task.vue";
import sidebar from "../components/sidebar.vue";
</script>

<template>
  <!--待辦便利貼與側邊欄/start -->
  <section class="container mt-3" id="to-do-list">
    <div class="row">
      <header class="col-12">
        <h2>
          待辦事項
          <i class="fas fa-tasks"></i>
        </h2>
        <hr class="pr-5" />
      </header>
      <task></task>
      <sidebar></sidebar>
    </div>
  </section>
  <!-- 待辦便利貼與側邊欄/end -->
</template>
