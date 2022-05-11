import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'



import './axios'
import './permission'

import 'element-plus/dist/index.css'
import 'md-editor-v3/lib/style.css';
const app = createApp(App)

app.use(ElementPlus)
app.use(VueAxios, axios)
app.use(router)

app.use(store)
app.mount('#app')
