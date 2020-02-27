import "./scripts/sum";
import "./styles/css/main.css";
import "./styles/scss/main.scss";

import router from './router';

window.Vue = require("vue");
import store from "./store/index.js"

Vue.component("mainApp", require("./components/Main.vue").default);
Vue.component("menuAbout", require("./components/MenuAbout.vue").default)
Vue.component("menuSettings", require("./components/MenuSettings.vue").default)
Vue.component("menuFeedback", require("./components/MenuFeedback.vue").default)


const app = new Vue({
    store,
    router,
    el: "#app"
});