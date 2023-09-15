<script setup>
import TheCareersEditable from '../components/TheCareersEditable.vue';
const props = defineProps(['id_position']);
</script>

<template>
  <main>
    <TheCareersEditable :id_position="props.id_position" />
  </main>
</template>
