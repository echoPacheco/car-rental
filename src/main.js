import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/global.scss";
import router from "./router";

import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIRE_BASE_API_KEY,
  authDomain: process.env.VUE_APP_FIRE_BASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIRE_BASE_APP_ID,
  measurementId: process.env.VUE_APP_FIRE_BASE_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase)

createApp(App).use(router).use(ElementPlus).mount("#app");

export {
  db
}