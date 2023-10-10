<script setup>
import { ref } from 'vue';
const props = defineProps(['localData']);

const terms = ref(false);
const terms_validation = ref(true);
const request_succ = ref(false);
const btnDisabled = ref(true);

// File transfer start
const file = ref();
const fileName = ref('');
const fileData = ref('');

const toBase64 = (c_file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    // console.log(file.value);
    reader.readAsDataURL(c_file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

// var file = document.querySelector('#files > input[type="file"]').files[0];
const removeAttachment = () => {
  file.value = '';
  fileName.value = '';
};

const handleFileUpload = async () => {
  // debugger;
  // console.log('selected file', file.value.files[0]);
  // console.log(await toBase64(file.value.files[0]));

  fileName.value = file.value.files[0].name;
  fileData.value = await toBase64(file.value.files[0]);

  const type = fileData.value.split(';')[0].split('/')[1];
  // console.log(type);
  // const mimeType = fileData.value.match(/^data:(.+);base64/)?.[1];

  // await fetch(await toBase64(file.value.files[0]))
  //   .then((res) => res.blob())
  //   .then((blob) => {
  //     console.log(blob);
  //     const file = new File([blob], 'Attachment', { type: mimeType });
  //     console.log(file);
  //   });

  //Upload to server
};
// File transfer end

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
  info: '',
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
      message: '<i>Telegram nickname: </i>' + data.info + '</p><br></p>' + data.message,
      file: fileData.value || '',
    };

    // console.log(dataBlob);

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
    removeAttachment();
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
        :class="[fieldValidation.info == 'false' ? 'error' : '', 'form_info']"
        placeholder="Telegram nickname*"
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
    <!-- dnd start -->
    <div class="dnd">
      <div class="dnd_content">
        <input ref="file" v-on:change="handleFileUpload()" type="file" />
        <div class="dnd_img"></div>
        <img src="./icons/paperclip.svg" alt="paperclip" height="28" width="28" />
        <div class="dnd_text">
          Attach a cover letter, resume, or portfolio (up to 10 MB)
        </div>
      </div>
      <div v-if="fileName != ''" class="attchment_list" @click="removeAttachment()">
        [X] {{ fileName }}
      </div>
    </div>
    <!-- <input ref="file" v-on:change="handleFileUpload()" type="file" /> -->
    <!-- dnd end -->
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
/* textarea {
  overflow-y: hidden;
} */
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
.dnd {
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px dashed #a7a7a7;
  width: 100%;
  margin-bottom: 30px;
  position: relative;
}
.dnd:hover {
  border-color: green;
}
.dnd_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;
}
.dnd_text {
  color: #a7a7a7;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.attchment_list {
  z-index: 10;
  padding-top: 15px;
}
.attchment_list:hover {
  cursor: pointer;
  color: #ff202b;
}
input[type='file'] {
  position: absolute;
  padding: 0;
  /* top: -50%; */
  top: 0%;
  right: 0px; /* not left, because only the right part of the input seems to
                 be clickable in some browser I can't remember */
  margin-bottom: 0;
  cursor: pointer;
  opacity: 0;
  filter: alpha(
    opacity=0
  ); /* and all the other old opacity stuff you
                                 want to support */
  font-size: 300px; /* wtf, but apparently the most reliable way to make
                         a large part of the input clickable in most browsers */
  /* height: 200px; */
  height: 106%;
}
@media (width < 900px) {
  .form__container {
    padding: 10px 20px;
  }
  .form__container input,
  .form__container textarea {
    padding: 16px 20px;
    font-size: 18px;
  }
  .form_row {
    flex-direction: column;
    gap: 0px;
  }
  .form_btn {
    width: 100%;
  }
  .form__container input::-moz-placeholder,
  .form__container textarea::-moz-placeholder {
    font-size: 18px;
  }
  .form__container input:-moz-placeholder,
  .form__container textarea:-moz-placeholder {
    font-size: 18px;
  }
  .form__container input:-ms-input-placeholder,
  .form__container textarea:-ms-input-placeholder {
    font-size: 18px;
  }
  .form__container input::-webkit-input-placeholder,
  .form__container textarea::-webkit-input-placeholder {
    font-size: 18px;
  }
  .form__container input::placeholder,
  .form__container textarea::placeholder {
    font-size: 18px;
  }
  .form__container input:placeholder,
  .form__container textarea:placeholder {
    font-size: 18px;
  }
}
</style>
