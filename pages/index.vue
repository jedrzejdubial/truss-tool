<script setup>
import { PhFilePlus } from '@phosphor-icons/vue'
</script>

<template>
  <div id="welcome">
    <h1>Welcome to Truss Tool</h1>
    <Button :tag="PhFilePlus" path="/new" />
    <p>Create a new project</p>
  </div>
</template>

<style>
@import url("~/assets/css/styles.css");

#welcome {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
