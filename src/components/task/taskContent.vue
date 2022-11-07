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
  <!-- 內容/start -->
  <p class="card-text" v-if="props.item.editState == 0">
    {{ props.item.content }}
  </p>
  <div class="input-group input-group-lg mb-3" v-if="props.item.editState == 1">
    <textarea
      rows="3"
      :class="{ 'form-control': true, 'border-0': true }"
      name="content"
      :id="`content${props.index}`"
      :value="props.item.content"
      >{{ props.item.content }}</textarea
    >
  </div>
  <!-- 內容/end -->
</template>
