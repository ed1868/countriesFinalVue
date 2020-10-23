// import { createRouter, createWebHistory } from 'vue-router';

import { createRouter, createWebHistory} from 'vue-router'

import CountryDetail from './pages/CountryDetail.vue';
import CountryList from './pages/CountryList.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/countries' },
    { path: '/countries', component: CountryList },
    {
      path: '/countries/:countryCode',
      component: CountryDetail,
      props: true,
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
