<script setup>
const props = defineProps(['localData']);
</script>

<template>
  <div class="form__container">
  
    <div>{{ props.localData }}</div>
  </div>
</template>

<style scoped>
.form__container {
  border-radius: 40px;
  border: 5px solid #FF0E1B;
  background: rgba(0, 0, 0, 0.30);
  padding: 60px 110px;
}
</style>
