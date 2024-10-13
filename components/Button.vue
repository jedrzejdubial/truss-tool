<script setup>
const props = defineProps({
  title: String,
  tag: Object,
  path: String,
  action: Function,
  width: { type: Number, default: 64 },
  height: { type: Number, default: 64 },
  iconSize: { type: Number, default: 32 }
})

const handleClick = computed(() => {
  return props.action ? props.action : props.path ? () => navigateTo(props.path) : undefined
})
</script>

<template>
  <button
    :title="props.title"
    :style="{ width: props.width + 'px', height: props.height + 'px' }"
    @click="handleClick">
      <component :is="() => h(props.tag, { size: props.iconSize })" />
  </button>
</template>

<style scoped>
button {
  border-radius: 8px;
  background-color: var(--gray);
}

button:hover {
  background-color: #424242;
}
</style>
