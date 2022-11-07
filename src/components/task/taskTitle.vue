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
  <!-- 標題/start -->
  <h4 class="card-title" v-if="props.item.editState == 0">
    <strong>{{ props.item.title }}</strong>
  </h4>
  <div class="input-group input-group-lg mb-3" v-if="props.item.editState == 1">
    <input
      type="text"
      :class="{
        'form-control': true,
        'font-weight-bold': true,
        'border-0': true,
      }"
      name="title"
      :id="`title${props.index}`"
      :value="props.item.title"
    />
  </div>
  <!-- 標題/end -->
</template>
