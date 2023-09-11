<script setup>
const props = defineProps(['id_position', 'id_vacancy']);
const id_position = props.id_position.replace('=', '/');
const id_vacancy = props.id_vacancy.replace('=', '/');
</script>

<template>
  <div class="item__container">
    Single Career Item: " {{ id_position + ' => ' + id_vacancy }} "
  </div>
</template>
