<script setup>
import { ref } from 'vue';
const props = defineProps(['localData']);

const terms = ref(false);
const terms_validation = ref(true);
const request_succ = ref(false);
const btnDisabled = ref(true);

const localBlob = ref({
  name: '',
  email: '',
  info: '',
  country: '',
  message: '',
});

const fieldValidation = ref({
  name: '',
  email: '',
  country: '',
  message: '',
});
const checkFields = () => {
  if (!terms.value) {
    terms_validation.value = false;
    setTimeout(() => {
      terms_validation.value = true;
    }, 3000);
  } else {
    terms_validation.value = true;
  }
  Object.keys(fieldValidation.value).map((el) => {
    localBlob.value[el] == ''
      ? (fieldValidation.value[el] = 'false')
      : (fieldValidation.value[el] = 'true');
  });

  Array.from(Object.values(fieldValidation.value)).filter((el) => el == 'false').length >
  0
    ? (btnDisabled.value = true)
    : (btnDisabled.value = false);
};
const requesPopup = () => {
  request_succ.value = true;
  setTimeout(() => {
    request_succ.value = false;
  }, 3000);
};
//
const logger = (el) => console.log(el);
//
const throwItOnTheGround = (data) => {
  checkFields();
  if (!btnDisabled.value && terms.value) {
    const dataBlob = {
      tEmail: 'elena.hr@megapari.com',
      // tEmail: 'shmelyshichka@yahoo.com',
      name: data.name,
      contact: data.email,
      subject: '[HR] Vacancy Application: ' + props.localData.id,
      company: 'Location: ' + data.country,
      message:
        '<i>Additional contact information: </i>' +
        data.info +
        '</p><br></p>' +
        data.message,
    };

    const myHeaders = new Headers();
    myHeaders.append('accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('X-Client-Ip', 'any');
    myHeaders.append('X-Visitor-Id', 'dont_care');

    const options = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(dataBlob),
    };

    fetch(
      'https://pyroproxy.herokuapp.com/https://pyro-mailer-megapari.vercel.app/send',
      options
    )
      .then((response) => response.text())
      .then((response) => {
        console.log('response: ' + response);
      })
      .catch((err) => console.log(err));

    requesPopup();
    localBlob.value = {
      name: '',
      email: '',
      info: '',
      country: '',
      message: '',
    };
    terms.value = false;
    terms_validation.value = true;
  } else {
    console.log('=ABORTED=');
    return false;
  }
};
</script>

<template>
  <div class="form__container">
    <div class="form_title">Apply to the position</div>
    <input
      type="text"
      :class="[fieldValidation.name == 'false' ? 'error' : '', 'form_name']"
      placeholder="First and last name*"
      v-model="localBlob.name"
    />
    <div class="form_row">
      <input
        type="email"
        :class="[fieldValidation.email == 'false' ? 'error' : '', 'form_mail']"
        placeholder="Email*"
        v-model="localBlob.email"
      />
      <input
        type="text"
        class="form_info"
        placeholder="Additional contact information"
        v-model="localBlob.info"
      />
    </div>
    <input
      type="text"
      :class="[fieldValidation.country == 'false' ? 'error' : '', 'form_country']"
      placeholder="Where do you live?*"
      v-model="localBlob.country"
    />
    <textarea
      :class="[fieldValidation.message == 'false' ? 'error' : '', 'form_text']"
      placeholder="Briefly tell us about yourself or provide links to your portfolio / code repository"
      v-model="localBlob.message"
    ></textarea>
    <div class="form_terms">
      <div
        :class="[terms_validation ? '' : 'terms_box-error', 'terms_box']"
        @click="terms = !terms"
      >
        <div class="terms_box-inner" :style="{ display: terms ? 'flex' : 'none' }"></div>
      </div>
      <div class="terms_text" @click="terms = !terms">
        I acknowledge and accept that my data will be processed in accordance with the
        Privacy Notice
      </div>
    </div>
    <!-- <div
      :class="[terms && !btnDisabled ? '' : 'form_btn-disabled', 'form_btn']"
      @click="[checkFields(localBlob), logger(localBlob)]"
    >
      Submit
    </div> -->
    <div class="form_btn" @click="[throwItOnTheGround(localBlob), logger(localBlob)]">
      Submit
    </div>

    <!-- <div>
      {{ props.localData }}
    </div> -->
    <div
      class="popup popup_terms"
      :style="{ display: terms_validation ? 'none' : 'flex' }"
    >
      You have to accept terms
    </div>
    <div
      class="popup popup_notification"
      :style="{ display: request_succ ? 'flex' : 'none' }"
    >
      Success!
    </div>
  </div>
</template>

<style scoped>
.form__container {
  border-radius: 40px;
  border: 5px solid #ff0e1b;
  background: rgba(0, 0, 0, 0.3);
  padding: 60px 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.popup {
  /* display: flex; */
  position: absolute;
  align-items: center;
  justify-content: center;
  padding: 35px;
  border-radius: 40px;
  border: 5px solid #ff0e1b;
  background-color: black;
  /* width: 100vw;
  height: 100vh; */
}
.form_title {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 36px;
}
.form__container input {
  border-radius: 66px;
  border: 2px solid #a7a7a7;
  background: rgba(0, 0, 0, 0.5);
  padding: 18px 40px;
  margin-bottom: 20px;
  width: 100%;
}
.form_row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}
.form__container textarea {
  resize: none;
  padding: 18px 40px;
  margin-bottom: 20px;
  min-width: 100%;
  width: 100%;
  border-radius: 30px;
  border: 2px solid #a7a7a7;
  background: rgba(0, 0, 0, 0.5);
  max-width: 1080px;
  width: 100%;
  min-height: 180px;
}
.form__container input.error,
.form__container textarea.error {
  border: 2px solid #ff0e1b;
}
.form__container input::placeholder,
.form__container textarea::placeholder {
  color: #a7a7a7;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
textarea {
  overflow-y: hidden;
}
.form_terms {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.terms_box {
  min-height: 20px;
  min-width: 20px;
  height: 20px;
  width: 20px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #a7a7a7;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.terms_box-error {
  border-color: #ff0e1b;
}
.terms_box-inner {
  /* display: none; */
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  border-radius: 2px;
  border: 1px solid #a7a7a7;
  background-color: #a7a7a7;
}
.terms_text {
  color: #a7a7a7;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
}
.form_btn {
  cursor: pointer;
  border-radius: 76px;
  background: #ff202b;
  box-shadow: 0px 4px 10px 0px rgba(255, 32, 43, 0.4);
  display: flex;
  width: 200px;
  padding: 15px 55px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.form_btn:hover {
  /* background: rgba(255, 32, 43, 0.7); */
  box-shadow: 0px 5px 10px 1px rgba(255, 32, 43, 0.7);
  cursor: pointer;
}
.form_btn:active {
  background: rgba(255, 32, 43, 0.7);
  box-shadow: 0px 4px 10px 0px rgba(255, 32, 43, 0.6);
}
.form_btn-disabled {
  cursor: not-allowed;
  background: rgba(255, 32, 43, 0.4);
}
</style>
