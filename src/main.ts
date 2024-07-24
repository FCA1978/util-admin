import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";

// createApp(App).mount('#app')

const app = createApp(App);

app.use(router);
app.mount("#app");
