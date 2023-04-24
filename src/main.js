import App from './App.vue'

import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'

import footageComponents from '@/components/footage'

const app = createApp(App)

registerPlugins(app)

footageComponents(app)

app.mount('#app')
