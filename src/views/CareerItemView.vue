<script setup>
import TheCareerItem from '../components/TheCareerItem.vue';
const props = defineProps(['id_position', 'id_vacancy']);
</script>

<template>
  <main>
    <TheCareerItem :id_position="props.id_position" :id_vacancy="props.id_vacancy" />
  </main>
</template>
