

import './bootstrap';
import './assets/main.css'

import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import {world} from './plugins/world'

// import progressbarConfig from '@/config/progressbar.config'
// import VueProgressBar from '@aacassandra/vue3-progressbar'

import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const app = createApp(App)

app.use(world);
app.use(LoadingPlugin)
// app.use(VueProgressBar, progressbarConfig)
app.use(router)
app.use(store)
app.mount('#app')

export default app