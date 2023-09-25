<script setup>
import TheCareers from '../components/TheCareers.vue';
import FAQ from '../components/FAQ.vue';
const props = defineProps(['id_position']);
</script>

<template>
  <main>
    <TheCareers :id_position="props.id_position" />
    <FAQ :editable="false" />
  </main>
</template>
