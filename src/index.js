import "./scripts/sum";
import "./styles/css/main.css";
import "./styles/scss/main.scss";

window.Vue = require("vue");
import store from "./store/index.js"

Vue.component("example-component", require("./components/Example.vue").default)

const app = new Vue({
    store,
    el: "#app"
});