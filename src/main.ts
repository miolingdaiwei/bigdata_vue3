import { createApp } from "vue";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import "./styles/index.scss";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(ElementPlus);
app.mount("#app");
