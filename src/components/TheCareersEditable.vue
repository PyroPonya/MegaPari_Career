<script setup>
import { ref } from 'vue';
import { useGlobalStore } from '@/stores/store';
const store = useGlobalStore();
const props = defineProps(['id_position']);
// Locker start
const masterkey = 'MegaPari';
// const lockpick = ref('');
const lockpick = ref('MegaPari');
const restore_msg = ref(false);
const save_msg = ref(false);
// Locker end
const calculateCount = (elId = '') => {
  let counter = 0;
  if (elId !== '') {
    store.data.map((el) => (el.id == elId ? (counter += el.list.length) : ''));
  } else {
    store.data.map((el) => (counter += el.list.length));
  }
  return counter;
};
const filterDisplay = (filterId = '') => {
  let filteredData = '';
  if (filterId == '' || filterId == 'all') {
    filteredData = store.data;
  } else {
    filteredData = store.data.filter((el) => el.id == filterId);
  }
  return filteredData;
};
// Store management
const removeEl = (side, position) => {
  store.data.map((sides, sidex_index) => {
    if (sides.id == side.id) {
      store.data[sidex_index].list = sides.list.filter(
        (positions) => positions.id != position.id
      );
    }
  });
};
const getData = () => {
  restore_msg.value = true;
  setTimeout(() => {
    restore_msg.value = false;
  }, 3000);
  return true;
};
const postData = () => {
  save_msg.value = true;
  setTimeout(() => {
    save_msg.value = false;
  }, 3000);
  return true;
};
const createData = ref({
  side: '',
  position: '',
  description: '',
  tasks: [],
  requirements: [],
  format: '',
});
</script>

<template>
  <!-- if -->
  <div v-if="lockpick != masterkey" class="career__container">
    <div class="key_text">Pass the Key</div>
    <input class="locker" v-model="lockpick" placeholder="Type here . . ." />
  </div>
  <!-- else -->
  <div v-else class="career__container">
    <div class="popup_add">
      Add
      <div class="select_side">select_side</div>
      <div class="select_position">select_position</div>
      <div class="descriprion">descriprion</div>
      <div class="tasks">tasks</div>
      <div class="requirements">requirements</div>
      <div class="format">format</div>
      <div class="controls">
        <div class="btn locker cancel">Cancel</div>
        <div class="btn locker submit">Sumbit</div>
      </div>
    </div>
    <div class="controls">
      <div
        class="popup locker_popup"
        :style="{ display: restore_msg || save_msg ? 'flex' : 'none' }"
      >
        {{ restore_msg ? 'Save data restored!' : save_msg ? 'Saved successfully!' : '' }}
      </div>
      <div class="btn locker" @click="getData()">Dismiss Changes</div>
      <div class="btn locker" @click="postData()">Save Changes</div>
    </div>
    <div class="career_title">All&nbsp;jobs</div>
    <div class="locker btn">Add Vacancy</div>
    <div class="id_list">
      <RouterLink
        :to="'/careers_editable/all'"
        :id_position="'all'"
        :class="[props.id_position == 'all' ? 'list_el-active' : '', 'list_el']"
      >
        All {{ calculateCount() }}
      </RouterLink>

      <RouterLink
        :to="'/careers_editable/' + el.id"
        :id_position="el.id"
        :class="[props.id_position == el.id ? 'list_el-active' : '', 'list_el']"
        v-for="el in store.data"
      >
        {{ el.id }} {{ calculateCount(el.id) == 0 ? '' : calculateCount(el.id) }}
      </RouterLink>
    </div>
    <div
      class="career_id"
      v-for="el in filterDisplay(props.id_position)"
      :style="{ display: calculateCount(el.id) ? 'flex' : 'none' }"
    >
      {{ el.id }}
      <!-- <div v-if="!calculateCount(el.id) && props.id_position == el.id" class="id_el-none">
        Sadly we have no open vacancies for selected position currently
      </div> -->
      <div v-for="item in el.list" class="id_el">
        <div class="el_text">{{ item.id }}</div>
        <!-- <div class="el_arrow"></div> -->
        <div class="controls">
          <RouterLink
            class="link el_remove"
            :to="'/careers/' + el.id.replace('/', '=') + '/' + item.id.replace('/', '=')"
            target="_blank"
            >Link&nbsp;to</RouterLink
          >
          <div class="el_remove" @click="removeEl(el, item)">Remove</div>
        </div>
      </div>
    </div>
  </div>
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
.career_title {
  margin-bottom: -22px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
}
.id_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 838px;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.id_list .list_el {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 49px;
  border: 2px solid #ff202b;
  background: rgba(63, 63, 63, 0.3);
  padding: 10px 20px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.id_list .list_el:hover {
  background: rgba(255, 32, 43, 0.7);
  cursor: pointer;
}
.id_list .list_el-active {
  background: #ff202b;
}
.career_id {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 60px;
  max-width: 1080px;
  width: 100%;
}
.career_id > .id_el:first-child {
  margin-top: 40px;
}
.career_id .id_el {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
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
.career_id .id_el .el_text {
  text-align: left;
  max-width: 930px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.career_id .id_el .el_arrow {
  height: 30px;
  width: 30px;
  background-image: url('./icons/Arrow_whiteOnRed.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
/* .career_id .id_el:hover {
  background-color: rgba(255, 32, 43, 1);
  cursor: pointer;
} */
.career_id .id_el:hover > .el_arrow {
  background-image: url('./icons/Arrow_redOnWhite.svg');
}
.id_el-none {
  margin-top: 40px;
  padding: 20px 40px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 838px;
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
.popup_add {
  position: fixed;
  width: 90vw;
  min-height: 50vh;
  z-index: 10;
  /* top: 10%; */
  display: flex;
  flex-direction: column;
  gap: 10px;
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
/* el controls */
.el_remove {
  padding: 15px 10px;
  border-radius: 20px;
  border: 2px solid #ff202b;
}
.el_remove:hover {
  background-color: rgba(255, 32, 43, 1);
  cursor: pointer;
}
</style>
