import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "./global-components";
import utils from "./utils";
import "./libs";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// SASS Theme
import "./assets/sass/app.scss";

const options = {
  timeout: 3000
};

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Toast, options);

globalComponents(app);
utils(app);

app.mount("#app");
