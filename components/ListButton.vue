<script setup>
const props = defineProps({
  item: Object
})
</script>

<template>
  <button>
    <img :src="'/truss/' + item.id + '.jpg'" :alt="`truss_` + item.id" />

    <div>
      <h2>{{ item.title }}</h2>
      <p>{{ item.width }}x29cm</p>
      <p>{{ item.weight }}kg</p>
    </div>
  </button>
</template>

<style scoped>
button {
  display: flex;
  background-color: transparent;
  margin: 8px;
}

img {
  border-radius: 10px;
}

div {
  text-align: left;
  padding-left: 8px;
}

p {
  margin: 4px 0 0 0;
}
</style>
