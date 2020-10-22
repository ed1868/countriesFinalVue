import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBackButton from './components/ui/BaseBackButton.vue';
import SearchFilter from './components/ui/BaseSearchBar.vue';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('search-filter', SearchFilter);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-back', BaseBackButton);


app.mount('#app');
