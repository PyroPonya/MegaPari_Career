<script setup>
import TheCareers from '../components/TheCareers.vue';
const props = defineProps(['id_position']);
</script>

<template>
  <main>
    <TheCareers :id_position="props.id_position" />
  </main>
</template>
