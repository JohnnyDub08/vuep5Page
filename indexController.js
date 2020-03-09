//rout file for vue js

Vue.component("testcomponent",{
    template:'<p>I am Test Component</p>'
});

Vue.component('MyHeader', require('./components/Header.vue'));
Vue.component('MyFooter', require('./components/Footer.vue'));

//import MyHeader from './components/Header.vue'
//import MyFooter from './components/Footer.vue'

var app = new Vue({
    el: "#root",
    components: {
        MyHeader,
        MyFooter
    },
    data: {

    },
    methods:{

    }

});
