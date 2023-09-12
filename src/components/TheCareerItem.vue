<script setup>
import ContactFrom from './ContactFrom.vue';
import { ref } from 'vue';
import { useGlobalStore } from '@/stores/store';
const store = useGlobalStore();
const props = defineProps(['id_position', 'id_vacancy']);
const id_position = props.id_position.replace('=', '/');
const id_vacancy = props.id_vacancy.replace('=', '/');
const localData = store.data
  .filter((el) => el.id == id_position)[0]
  .list.filter((el) => el.id == id_vacancy)[0];
const target = ref(null);
const goToTest = () => {
  target.value?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
</script>

<template>
  <div class="item__container">
    Single Career Item: " {{ id_position + ' => ' + id_vacancy }} "
    <br />
    {{
      Object.keys(
        store.data
          .filter((el) => el.id == id_position)[0]
          .list.filter((el) => el.id == id_vacancy)[0]
      )
    }}
    <br />

    <div class="item">
      <div class="item_title">
        {{ localData.id }}
      </div>
      <div class="item_desc">
        {{ localData.desc }}
      </div>
      <div class="item_btn" @click="goToTest">Apply</div>
      <div class="tasks_title">Tasks</div>
      <div class="item_tasks" v-for="el in localData.tasks">
        <img class="item_svg" src="./icons/BlueEclipse.svg" alt="" /> {{ el }}
      </div>
      <div class="reqs_title">Requirements</div>
      <div class="item_reqs" v-for="el in localData.reqs">
        <img class="item_svg" src="./icons/BlueEclipse.svg" alt="" /> {{ el }}
      </div>
      <div class="format_title">Work Format</div>
      <div class="item_format">
        {{ localData.format }}
      </div>
    </div>

    <div ref="target" class="form__container">
      <ContactFrom :localData="localData" />
    </div>
  </div>
</template>

<style scoped>
.item__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  padding: 100px 0px;
}
.item {
  max-width: 1090px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item .item_title {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;
}
.item .item_desc {
  color: #fff;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  margin-bottom: 40px;
}
.item .item_btn {
  display: flex;
  width: 200px;
  padding: 15px 55px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 76px;
  background: #ff202b;
  box-shadow: 0px 4px 10px 0px rgba(255, 32, 43, 0.4);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 120px;
}
.item .item_btn:hover {
  /* background: rgba(255, 32, 43, 0.7); */
  box-shadow: 0px 5px 10px 1px rgba(255, 32, 43, 0.7);
  cursor: pointer;
}
.item .item_btn:active {
  background: rgba(255, 32, 43, 0.7);
  box-shadow: 0px 4px 10px 0px rgba(255, 32, 43, 0.6);
}
.item .tasks_title,
.item .reqs_title,
.item .format_title {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
.item .reqs_title,
.item .format_title {
  margin-top: 20px;
}
.item .item_tasks .item_svg,
.item .item_reqs .item_svg {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  margin-top: 9px;
  /* this ^ is dog */
}
.item .item_tasks,
.item .item_format,
.item .item_reqs {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  text-align: left;
}
.item .item_format {
  margin-bottom: 100px;
}
.form__container {
  max-width: 1300px;
  width: 100%;
}
</style>
