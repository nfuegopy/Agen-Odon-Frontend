import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'primevue/resources/themes/saga-blue/theme.css'; // PrimeVue theme
import 'primevue/resources/primevue.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons
import PrimeVue from 'primevue/config';
import axios from './axios';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);
app.config.globalProperties.$axios = axios;

app.mount('#app');
