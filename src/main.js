import { createApp } from 'vue'
import App from './App.vue'

import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;       // 글로벌한 변수 보관함임

import store from './store.js'
import './registerServiceWorker'

// createApp(App).mount('#app')
app.use(store).mount('#app')
