import { createApp } from 'vue'
import store from "./store"
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import "./styles/app.css"
import { makeServer } from "./server";



if (process.env.NODE_ENV === "development") {
  makeServer();
}

createApp(App).use(store).use(Quasar, quasarUserOptions).mount('#app')
