import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { useI18n } from "@/plugins/i18n";

// createApp(App).mount('#app')

const app = createApp(App);

app.use(router);
app.use(useI18n);
app.mount("#app");
