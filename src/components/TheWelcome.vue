<script setup>
import mainImage from './icons/main_image.png';
import welcomeImage from './icons/welcome_image.png';
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
</script>

<template>
  <div class="welcome__container">
    <div class="welcome__head">
      <div class="head_text">
        <div class="text_title">Explore a new career with MegaPari</div>
        <div class="text_content">
          Join the MegaPari team today and jumpstart your career
        </div>
        <RouterLink to="/careers/all">
          <div class="text_btn">See all</div>
        </RouterLink>
      </div>
      <div class="head_image" :style="{ backgroundImage: 'url(' + welcomeImage + ')' }">
        <!-- <img src="./icons/welcome_image.png" alt="" /> -->
      </div>
    </div>

    <div class="welcome__body">
      <div
        class="body_image"
        :style="{ backgroundImage: 'url(' + mainImage + ')' }"
      ></div>
      <div class="body_text">
        <div class="text_title">Info about us</div>
        <div class="text_content">
          MegaPari is a prominent iGaming brand that offers a multi-modal platform for
          online gambling. In Europe, the Middle East, Latin America, Asia and Africa,
          MegaPari has experienced rapid growth since its launch In 2019.
        </div>
      </div>
    </div>

    <div class="welcome__foot">
      <RouterLink to="/careers/Design" :id_position="props.id_position">
        <div class="foot_el">
          <div class="el_tag">JOB</div>
          <div class="el_title">Design</div>
          <div class="el_desc">Web design, graphic design, motion design</div>
          <div class="el_count">{{ calculateCount('Design') }} OPEN JOBS</div>
        </div>
      </RouterLink>
      <RouterLink to="/careers/Management" :id_position="props.id_position">
        <div class="foot_el">
          <div class="el_tag">JOB</div>
          <div class="el_title">Management</div>
          <div class="el_desc">Plan, develop and implement complex projects</div>
          <div class="el_count">{{ calculateCount('Management') }} OPEN JOBS</div>
        </div>
      </RouterLink>
      <RouterLink to="/careers/Marketing" :id_position="props.id_position">
        <div class="foot_el">
          <div class="el_tag">JOB</div>
          <div class="el_title">Marketing</div>
          <div class="el_desc">User Acquisition, Perfomance, KPI</div>
          <div class="el_count">{{ calculateCount('Marketing') }} OPEN JOBS</div>
        </div>
      </RouterLink>
      <RouterLink to="/careers/all" :id_position="props.id_position">
        <div class="foot_el">
          <div class="el_tag">JOB</div>
          <div class="el_title">All</div>
          <div class="el_desc">View all jobs</div>
          <div class="el_count">{{ calculateCount() }} OPEN JOBS</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.welcome__container {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
}
.welcome__head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 138px;
  margin-bottom: 146px;
}
.welcome__head .head_text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.welcome__head .text_title {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 744px;
  margin-bottom: 40px;
  text-align: start;
}
.welcome__head .text_content {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 545px;
  margin-bottom: 60px;
  text-align: start;
}
.welcome__head .text_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 76px;
  background: rgba(255, 32, 43, 1);
  box-shadow: 0px 4px 10px 0px rgba(255, 32, 43, 0.4);
  max-width: 200px;
  padding: 15px 55px;
}
.welcome__head .text_btn:hover {
  /* background: rgba(255, 32, 43, 0.7); */
  box-shadow: 0px 5px 10px 1px rgba(255, 32, 43, 0.7);
  cursor: pointer;
}
.welcome__head .text_btn:active {
  background: rgba(255, 32, 43, 0.7);
  box-shadow: 0px 4px 10px 0px rgba(255, 32, 43, 0.6);
}
.welcome__head .head_image {
  width: 583.173px;
  height: 554.143px;
  transform: scale(1.5);
  z-index: -1;
  flex-shrink: 0;
  /* background-image: url('./icons/welcome_image.png'); */
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  right: -20px;
  top: -138px;
}

.welcome__body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 120px;
}
.welcome__body .body_image {
  width: 640px;
  height: 352px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.welcome__body .body_text {
  max-width: 544px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.welcome__body .text_title {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.welcome__body .text_content {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  text-align: left;
}
.welcome__foot {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.welcome__foot .foot_el {
  border-radius: 30px;
  border: 2px solid #ff202b;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 20px 0px rgba(255, 14, 27, 0.4);
  width: 310px;
  height: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
}
.welcome__foot .foot_el:hover {
  border-radius: 30px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background: #ff202b;
  box-shadow: 0px 3px 20px 0px rgba(255, 14, 27, 0.4);
  cursor: pointer;
}
.welcome__foot .el_tag {
  border-radius: 51px;
  background: #ff202b;
  display: inline-flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
}
.welcome__foot .el_title {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  margin-bottom: 5px;
}
.welcome__foot .el_desc {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  text-align: left;
  margin-bottom: 25px;
}
.welcome__foot .el_count {
  color: #b9b9b9;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
}
@media (width < 1330px) {
  .welcome__head,
  .welcome__body,
  .welcome__foot {
    flex-direction: column;
  }
  .welcome__container {
    gap: 20px;
  }
  .welcome__head .head_image {
    display: none;
  }
  .welcome__head .text_btn {
    align-self: center;
  }
}
@media (width < 900px) {
  .welcome__container {
    padding: 0px 10px;
  }
  .welcome__head {
    margin-top: 38px;
    margin-bottom: 26px;
  }
  .welcome__head .text_title {
    font-size: 55px;
  }
  .welcome__head .text_content {
    font-size: 28px;
  }
  .welcome__body {
    gap: 20px;
    margin-bottom: 20px;
  }
}
@media (width < 700px) {
  .welcome__body .body_image {
    width: 100%;
  }
}
</style>
