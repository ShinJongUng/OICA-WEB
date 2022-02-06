import { createApp } from 'vue' 
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import './firebaseConfig'

createApp(App)
//plugin
.use(router)
.use(store)
.mount('#app')



//Below the import code
