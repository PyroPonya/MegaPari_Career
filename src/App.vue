<script setup>
import { RouterLink, RouterView } from 'vue-router';
import MegapariLogo from './assets/LOGO_MEGAPARI.svg';
import { useGlobalStore } from '@/stores/store';
const store = useGlobalStore();

// Api_Key = 0d3cfbdb-bd33-4644-8360-beba5dfa32f2
// GET || PUT = https://api.jsonstorage.net/v1/json/e2efe603-ab71-4699-91d6-fff297c37cbc/834911cc-22aa-42bd-941a-5be549af8fc5?apiKey=%your api key%
// old
// const getData = () => {
//   fetch(
//     'https://getpantry.cloud/apiv1/pantry/a7740feb-4ea3-4c41-9f34-9f68ca6b3bb8/basket/MegaPari_Jobs'
//   )
//     .then((response) => response.text())
//     .then((response) => {
//       const data = JSON.parse(response);
//       store.data = data.payload;
//       store.faq = data.faq;
//       // console.log('response: ', JSON.parse(response));
//       console.log('response: SUCCESSFUL');
//     })
//     .catch((err) => console.log(err));
//   // console.log(store.data);
//   return true;
// };
// new
const getData = () => {
  fetch(
    'https://api.jsonstorage.net/v1/json/e2efe603-ab71-4699-91d6-fff297c37cbc/834911cc-22aa-42bd-941a-5be549af8fc5?apiKey=0d3cfbdb-bd33-4644-8360-beba5dfa32f2'
  )
    .then((response) => response.text())
    .then((response) => {
      const data = JSON.parse(response);
      store.data = data.payload;
      store.faq = data.faq;
      // console.log('response: ', JSON.parse(response));
      console.log('response: SUCCESSFUL');
    })
    .catch((err) => console.log(err));
  // console.log(store.data);
  return true;
};

getData();
</script>

<template>
  <header>
    <div class="header__wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <div class="header__content">
        <RouterLink to="/">
          <img src="./assets/LOGO_MEGAPARI.svg" class="header__logo" />
        </RouterLink>
        <nav>
          <RouterLink to="/">Company</RouterLink>
          <RouterLink to="/careers/all">Careers</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="footer__wrapper">
      <div class="footer__content">
        <RouterLink to="/">
          <img src="./assets/LOGO_MEGAPARI.svg" class="header__logo" />
        </RouterLink>
        <div class="footer__contacts">
          <div class="contacts__top">
            <div class="contacts__email">elena.hr@megapari.com</div>
            <div class="contacts__title">Join us and learn new things</div>
            <div class="line"></div>
          </div>
          <div class="contacts__bottom">
            <div class="contacts__linkedin">
              <a href="https://www.linkedin.com/company/megapari/"> LinkedIn </a>
            </div>
            <div class="contacts__headhunter">
              <a href="https://hh.ru/employer/5788049?from=share_ios"> HeadHunter </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.header__wrapper {
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.header__logo {
  width: 271px;
  height: 31px;
}
.header__content {
  height: 110px;
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
nav {
  display: flex;
  flex-direction: row;
  gap: 120px;
}
nav > a {
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
nav > a:hover {
  color: rgba(255, 255, 255, 1);
}
footer {
  margin-top: auto;
}
.footer__wrapper {
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* bottom: 0px; */
  overflow-x: hidden;
  width: 100%;
}
.footer__content {
  padding: 60px 0;
  min-height: 280px;
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.footer__content > a {
  align-self: flex-start;
}
.footer__contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
}
.contacts__top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  /* width: 100vw; */
  position: relative;
}
.contacts__bottom {
  display: flex;
  flex-direction: row;
  gap: 115px;
}
.contacts__email {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.contacts__title {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.contacts__linkedin,
.contacts__headhunter {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.line {
  height: 1px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box;
  position: absolute;
  bottom: 0;
}
.footer__content a {
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.footer__content a:hover {
  color: rgba(255, 255, 255, 1);
}

@media (width < 1330px) {
  .footer__content,
  header nav {
    padding: 60px 20px;
  }
}
@media (width < 900px) {
  .footer__content,
  header nav {
    padding: 30px 20px;
  }
  .footer__content {
    flex-direction: column;
    gap: 20px;
    /* align-items: flex-start; */
    align-items: center;
  }
  .header__content {
    flex-direction: column;
    padding: 10px 0;
  }
  .contacts__bottom {
    gap: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .footer__contacts {
    width: 100%;
  }
}
</style>
