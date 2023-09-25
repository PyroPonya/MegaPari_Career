<script setup>
import TheCareersEditable from '../components/TheCareersEditable.vue';
import FAQ from '../components/FAQ.vue';
const props = defineProps(['id_position']);
</script>

<template>
  <main>
    <TheCareersEditable :id_position="props.id_position" />
    <FAQ :editable="true" />
  </main>
</template>
