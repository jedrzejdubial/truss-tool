<script setup>
import { PhArrowClockwise, PhTrashSimple } from '@phosphor-icons/vue'

const props = defineProps({
  width: Number,
  id: Number,
  x: Number,
  y: Number
})

const emit = defineEmits(['remove', 'edge'])

const hidden = ref('hidden')
const rotation = ref(0)

function rotate() {
  rotation.value += 90
}

function remove() {
  emit('remove')
}

function edge(side) {
  emit('edge', { side, id: props.id })
}

function toggleActions() {
  hidden.value = hidden.value === '' ? 'hidden' : ''
}
</script>

<template>
  <div :style="{
    width: props.width + 16 + 'px',
    transform: `rotate(${rotation}deg)`,
    position: 'absolute',
    left: `${props.x}px`,
    top: `${props.y}px` }">
      <div class="actions" :class="hidden">
        <Button title="Rotate" :tag="PhArrowClockwise" :width="29" :height="29" :iconSize="15" @click="rotate" />
        <Button title="Remove" :tag="PhTrashSimple" :width="29" :height="29" :iconSize="15" @click="remove" />
      </div>

      <div class="truss" :id="`truss-${id}`" :style="{ width: props.width + 16 + 'px' }">
        <div
          class="element"
          :style="{ width: props.width + 'px' }"
          @click.right.prevent="toggleActions">
            <p>{{ props.width }}</p>
        </div>

        <button class="edge right" @click="() => edge('right')"></button>
      </div>
  </div>
</template>

<style scoped>
.truss {
  display: flex;
  cursor: pointer;
}

.actions {
  height: 29px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.element {
  height: 29px;
  background-color: gray;
  text-align: center;
}

p {
  margin: 0;
}

.edge {
  background-color: #1919cc;
  width: 8px;
  padding: 0;
}

.hidden {
  opacity: 0;
}
</style>
