import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './Pages/Home.vue'
import About from './Pages/About.vue'
import NotFound from './Pages/NotFound.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/:pathMatch(.*)', component: NotFound}
];




const app = createApp(App)
app.mount('#app')
