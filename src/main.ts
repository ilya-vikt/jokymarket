import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setScrollBarWidth } from './utils';

const app = createApp(App)
setScrollBarWidth();

app.use(createPinia())
app.use(router)

app.mount('#app')
