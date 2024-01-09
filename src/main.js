import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/global.scss';
import router from './router';

createApp(App)
.use(router)
.mount('#app')
