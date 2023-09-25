<script setup>
import { useCookies } from 'vue3-cookies';
import { ref, watch } from 'vue';
import TheCareersEditable from '../components/TheCareersEditable.vue';
import FAQ from '../components/FAQ.vue';
const props = defineProps(['id_position']);

const { cookies } = useCookies();
const masterkey = 'MegaPari';
const lockpick = ref(cookies.get('access') || '');
// const lockpick = ref('MegaPari');
const displayAdd = ref(false);
// const displayAdd = ref(true);
const restore_msg = ref(false);
const save_msg = ref(false);
watch(
  () => lockpick.value,
  (val) => {
    if (val == masterkey) {
      cookies.set('access', 'MegaPari');
    }
  }
);
</script>

<template>
  <main>
    <!-- if -->
    <div v-if="lockpick != masterkey" class="career__container">
      <div class="key_text">Pass the Key</div>
      <input class="locker" v-model="lockpick" placeholder="Type here . . ." />
    </div>
    <!-- else -->
    <TheCareersEditable v-else :id_position="props.id_position" />
    <FAQ v-if="(lockpick == masterkey)" :editable="true" />
  </main>
</template>

<style scoped>
.career__container {
  position: relative;
  max-width: 1080px;
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}
/* Locker start */
.key_text {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.locker {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 20px;
  border-radius: 30px;
  border: 2px solid #ff202b;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px 40px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.locker_popup {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 50px;
  border-radius: 30px;
  border: 4px solid #ff202b;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.container_add {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: 10;
  background: rgba(34, 36, 53, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.popup_add {
  /* position: fixed; */
  width: 90vw;
  min-height: 50vh;
  /* z-index: 10; */
  /* top: 10%; */
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px;
  border-radius: 30px;
  border: 4px solid #ff202b;
  background: rgba(0, 0, 0, 1);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.locker.btn {
  cursor: pointer;
}
.locker.btn:hover {
  background-color: rgba(255, 32, 43, 1);
}
</style>
