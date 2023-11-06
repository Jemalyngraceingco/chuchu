import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/css/index.css';
import '@/assets/css/accesibility.css';
import '@/assets/css/global-header.css';
import '@/assets/css/global-footer.css';
import '@/assets/css/contact-page.css';
import '@/assets/css/facilities.css';
import '@/assets/css/rooms-and-suites.css';

axios.defaults.baseURL="http://backend.test/"

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
