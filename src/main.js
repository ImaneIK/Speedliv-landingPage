import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {MotionPlugin} from '@vueuse/motion'
import App from './App.vue'
import router from './router'


library.add(far,fas)
import './index.css'
createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.use(MotionPlugin)
.mount('#app')




