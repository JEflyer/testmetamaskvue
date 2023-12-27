<template>
  <router-view />
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import MetamaskCheck from './MetamaskCheck.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MetamaskCheck },
  ],
});

export default {
  router,
};
</script>