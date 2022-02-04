import { createApp } from 'vue' 
import { initializeApp } from 'firebase/app';
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import firebaseConfig from './firebaseConfig'
initializeApp(firebaseConfig);

createApp(App)
//plugin
.use(router)
.use(store)
.mount('#app')