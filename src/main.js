import { createApp } from 'vue'
import { createPopper } from '@popperjs/core';
import App from './App.vue'
import router from './routes/index.js'

createApp(App)
//plugin
.use(router)
.mount('#app')