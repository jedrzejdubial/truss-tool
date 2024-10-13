<script setup>
import { PhX } from '@phosphor-icons/vue'

const props = defineProps({
  title: String,
  id: String
})
</script>

<template>
  <dialog :id="id">
    <div class="dialog_top">
      <h2>{{ title }}</h2>
      <Button
        title="Close menu"
        :tag="PhX"
        :width="44"
        :height="44"
        :iconSize="26"
        :onclick="`${id}.close()`"
      />
    </div>

    <slot />
  </dialog>
</template>

<style scoped>
dialog {
  background-color: var(--gray);
  border: none;
  border-radius: 20px;
  padding: 15px;
  width: 60%;
  height: 70%;
  scrollbar-width: none;
}

.dialog_top {
  display: flex;
  justify-content: space-between;
}
</style>
