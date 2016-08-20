const Vue  = require('vue');
const electron  = require('vue-electron');
const vueElectron  = require('vue-electron');
const resource  = require('vue-resource');
const app  = require('./app.vue');
//require('materialize-css');
require('electron');

Vue.use(vueElectron);
Vue.use(resource);
Vue.config.debug = true;


/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: {
        app: app
    }
});
