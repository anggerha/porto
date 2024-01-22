import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './router/router.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)

/* add icons to the library */
library.add(faUserSecret, faInstagram, faFacebook)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(AOS.init())
app.use(router)

app.mount('#app')
