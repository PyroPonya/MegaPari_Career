<script setup>
import { ref, watch } from 'vue';
import { useCookies } from "vue3-cookies";
import Dropdown from 'primevue/dropdown';
import Chips from 'primevue/chips';
import InputText from 'primevue/inputtext';
import { useGlobalStore } from '@/stores/store';
const store = useGlobalStore();
const props = defineProps(['id_position']);
// Locker start + cookie
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
    if(val == masterkey) {
      cookies.set('access', 'MegaPari');
    };
  }
);
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

// Dropdown Selectors + localData
const localData = ref({
  side: '',
  position: '',
  description: '',
  tasks: [],
  requirements: [],
  format: '',
});
// const localData = ref({
//   side: '',
//   position: 'First Artisian',
//   description:
//     'JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc JobDesc ',
//   tasks: ['Task1', 'Task2', 'Task3'],
//   requirements: ['Req1', 'Req2', 'Req3'],
//   format: 'Format as is',
// });
const sideList = ref(store.data.map((el) => el.id));
const getPositions = (side) => {
  const positionList = ref();
  store.data.map((sides, side_index) => {
    if (sides.id == side) {
      positionList.value = store.data[side_index].list.map((el) => el.id);
    }
  });
  return positionList.value;
};
const addCancel = () => {
  localData.value = {
    side: '',
    position: '',
    description: '',
    tasks: [],
    requirements: [],
    format: '',
  };
  displayAdd.value = false;
};
const addSubmit = () => {
  console.log(localData.value);
  localData.value = {
    side: '',
    position: '',
    description: '',
    tasks: [],
    requirements: [],
    format: '',
  };
  store.data.map((el) => {
    if (el.id == localData.value.side) {
      console.log('el.id: ', el.id);
      console.log('el.list: ', el.list);
      const typed = {
        id: localData.value.position,
        desc: localData.value.description,
        tasks: localData.value.tasks,
        reqs: localData.value.requirements,
        format: localData.value.format,
      };
      el.list.push(typed);
      console.log(store.value);
    }
  });
  displayAdd.value = false;
};

// Store management
const removeEl = (side, position) => {
  store.data.map((sides, side_index) => {
    if (sides.id == side.id) {
      store.data[side_index].list = sides.list.filter(
        (positions) => positions.id != position.id
      );
    }
  });
};
const getData = () => {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      console.log(req.responseText);
      const data = JSON.parse(req.responseText);
      store.data = data.record.sample;
    }
  };

  req.open('GET', 'https://api.jsonbin.io/v3/b/65059fc5e4033326cbd8ad8a/latest', true);
  req.setRequestHeader(
    'X-Master-Key',
    '$2b$10$7PeQE7cb5t/UZF9M9RKj7ujLQaSHGFA6lsheiMXe0d81mUVgYyVqi'
  );
  req.send();
  restore_msg.value = true;
  setTimeout(() => {
    restore_msg.value = false;
  }, 3000);
  return true;
};
const postData = () => {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      console.log(req.responseText);
    }
  };
  req.open('PUT', 'https://api.jsonbin.io/v3/b/65059fc5e4033326cbd8ad8a', true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.setRequestHeader(
    'X-Master-Key',
    '$2b$10$7PeQE7cb5t/UZF9M9RKj7ujLQaSHGFA6lsheiMXe0d81mUVgYyVqi'
  );
  const data = JSON.stringify(store.data);
  req.send('{"sample":' + data + '}');
  save_msg.value = true;
  setTimeout(() => {
    save_msg.value = false;
  }, 3000);
  return true;
};
</script>

<template>
  <!-- if -->
  <div v-if="lockpick != masterkey" class="career__container">
    <div class="key_text">Pass the Key</div>
    <input class="locker" v-model="lockpick" placeholder="Type here . . ." />
  </div>
  <!-- else -->
  <div v-else class="career__container">
    <!-- popup start -->
    <div
      class="container_add"
      :style="{ display: displayAdd ? 'flex' : 'none' }"
      @click.self="displayAdd = false"
    >
      <div class="popup_add">
        Add
        <div class="select_side card flex justify-content-center">
          <Dropdown
            v-model="localData.side"
            :options="sideList"
            placeholder="Select a Side"
            class="w-full md:w-14rem"
          />
        </div>
        <div class="select_position card flex justify-content-center">
          <Dropdown
            v-if="localData.side != ''"
            v-model="localData.position"
            :options="getPositions(localData.side)"
            placeholder="Select a Position"
            class="w-full md:w-14rem"
            editable
          />
        </div>
        <textarea
          class="description"
          v-model="localData.description"
          placeholder="Enter the job descriprion"
        ></textarea>
        <span class="tasks p-float-label">
          <Chips id="chips_tasks" v-model="localData.tasks" />
          <label for="chips_tasks">Tasks</label>
        </span>
        <span class="tasks p-float-label">
          <Chips id="chips_requirements" v-model="localData.requirements" />
          <label for="chips_requirements">Requirements</label>
        </span>
        <div class="tasks flex flex-column gap-2 p-float-label">
          <InputText id="format" v-model="localData.format" />
          <label for="format">Format</label>
        </div>
        <div class="controls">
          <div class="btn locker cancel" @click="addCancel()">Cancel</div>
          <div class="btn locker submit" @click="addSubmit()">Sumbit</div>
        </div>
      </div>
    </div>
    <!-- popup end -->
    <div class="controls">
      <!-- confirm popup start -->
      <div
        class="popup locker_popup"
        :style="{ display: restore_msg || save_msg ? 'flex' : 'none' }"
      >
        {{ restore_msg ? 'Save data restored!' : save_msg ? 'Saved successfully!' : '' }}
      </div>
      <!-- confirm popup end -->
      <div class="btn locker" @click="getData()">Dismiss Changes</div>
      <div class="btn locker" @click="postData()">Save Changes</div>
    </div>
    <div class="career_title">All&nbsp;jobs</div>
    <div class="locker btn" @click="displayAdd = true">Add Vacancy</div>
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
.description {
  padding: 15px 15px;
  border-radius: 20px;
  border: 4px solid #ff202b;
  background: rgb(73, 73, 73);
  width: 100%;
  min-height: 300px;
  resize: none;
}
.description:focus {
  outline: none;
}
.tasks {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  border: 4px solid #ff202b;
  background: rgb(73, 73, 73);
  width: 100%;
}
.tasks input {
  width: 100%;
  text-align: center;
}
.format {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  border: 4px solid #ff202b;
  background: rgb(73, 73, 73);
  width: 100%;
}
</style>
