<script setup>
import { useGlobalStore } from '@/stores/store';
const store = useGlobalStore();
const props = defineProps(['id_position']);
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
</script>

<template>
  <div class="career__container">
    <div class="career_title">All&nbsp;jobs</div>
    <div class="id_list">
      <RouterLink
        :to="'/careers/all'"
        :id_position="'all'"
        :class="[props.id_position == 'all' ? 'list_el-active' : '', 'list_el']"
      >
        All {{ calculateCount() }}
      </RouterLink>

      <RouterLink
        :to="'/careers/' + el.id"
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
      <RouterLink
        v-for="item in el.list"
        :to="'/careers/' + el.id.replace('/', '=') + '/' + item.id.replace('/', '=')"
        class="id_el"
      >
        <div class="el_text">
          {{ item.id }}
        </div>
        <div class="el_arrow"></div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.career__container {
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
  min-width: 30px;
  min-height: 30px;
  background-image: url('./icons/Arrow_whiteOnRed.svg');
  background-position: center;
  background-size: contain;
}
.career_id .id_el:hover {
  background-color: rgba(255, 32, 43, 1);
  cursor: pointer;
}
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
</style>
