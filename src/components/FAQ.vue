<script setup>
import { ref } from 'vue';
import { useGlobalStore } from '@/stores/store';
const store = useGlobalStore();
const props = defineProps(['editable']);

const faqFilter = (el) => {
  // store.faq = store.faq.filter(el != el);
  // console.log(el);
  // console.log(store.faq);
  // console.log(store.faq.filter((item) => item != el));
  store.faq = store.faq.filter((item) => item != el);
};
const popupDisplay = ref(false);
const newData = ref({
  q: '',
  a: '',
  open: false,
});
const faqAdd = () => {
  if (newData.value.a != '' && newData.value.q != '') {
    store.faq.push(newData.value);
    newData.value = {
      q: '',
      a: '',
      open: false,
    };
  } else {
    return false;
  }
};
</script>

<template>
  <div class="faq__container">
    <div class="faq_title">FAQ</div>
    <div v-if="props.editable" class="el_add" @click.stop="popupDisplay = !popupDisplay">
      Add new FAQ element
    </div>
    <div class="faq_el" v-for="el in store.faq" @click="el.open = !el.open">
      <div class="el_content">
        <div class="el_q">{{ el.q }}</div>
        <div
          class="el_a"
          v-if="el.open"
          :style="el.open ? '' : 'height: 0px; opacity: 0'"
        >
          {{ el.a }}
        </div>
      </div>
      <div v-if="props.editable" class="el_remove" @click.stop="faqFilter(el)">
        Remove
      </div>
      <div class="el_icon" :style="el.open ? '' : 'transform: rotate(180deg)'"></div>
    </div>
    <!-- popup start -->
    <div v-if="popupDisplay" class="popup">
      <div class="faq_title">New FAQ element</div>
      <div class="popup_content">
        <input
          class="faq_input"
          type="text"
          v-model="newData.q"
          placeholder="Enter question ..."
        />
        <textarea
          class="faq_area"
          type="text"
          v-model="newData.a"
          placeholder="Enter answer ..."
        />
      </div>
      <div class="popup_controls">
        <div class="el_add" @click.stop="[faqAdd(), (popupDisplay = !popupDisplay)]">
          Add
        </div>
        <div class="el_add" @click.stop="popupDisplay = !popupDisplay">Cancel</div>
      </div>
    </div>
    <!-- popup end -->
  </div>
</template>

<style scoped>
.faq__container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  margin-bottom: 100px;
}
.faq_title {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  width: 100%;
}
.faq_el {
  padding: 30px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  transition: all 0.35s ease-in-out;
}
.el_content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  max-width: 950px;
  transition: all 0.35s ease-in-out;
}
.el_q {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
}
.el_a {
  white-space: pre-line;
  text-align: left;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  height: 100%;
  transition: all 0.35s ease-in-out;
}
.el_icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background-image: url('./icons/faq_el_icon.svg');
  transition: all 0.35s ease-in-out;
}
.el_add {
  margin-top: 10px;
}
.el_add,
.el_remove {
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
  cursor: pointer;
}
.el_add:hover,
.el_remove:hover {
  background-color: rgba(255, 32, 43, 1);
}
.popup {
  position: absolute;
  display: grid;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  justify-items: center;
  align-content: space-between;
  padding: 20px 35px;
  border-radius: 30px;
  border: 2px solid #ff202b;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  min-height: 400px;
}
.popup .popup_controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
}
.popup .popup_content {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
}
.faq_input,
.faq_area {
  min-width: 300px;
  width: 600px;
  padding: 15px 25px;
  background-color: #fff;
  color: black;
}
.faq_input {
  height: 45px;
}
.faq_area {
  resize: none;
  min-height: 90px;
}
.popup .faq_title {
  padding-bottom: 5px;
  border: none;
}
</style>
