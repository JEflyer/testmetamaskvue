import './assets/main.css'
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import MetamaskCheck from './MetamaskCheck.vue';


import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: MetamaskCheck },
    ],
  });
  


const app = createApp(App)
app.use(router);
app.mount('#app')
