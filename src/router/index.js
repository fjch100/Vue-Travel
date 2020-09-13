import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        props: true
    },
    {
        path: '/destination/:slug',
        name: 'destinationDetails',
        props: true,
        component: () =>
            import ( /* webpackChunkName: "Hawai" */ "../views/DestinationDetails.vue"),
        children: [{
            path: ':experienceSlug',
            name: 'experienceDetails',
            props: true,
            component: () =>
                import ( /* webpackChunkName: "experiencesDetails" */ "../views/ExperiencesDetails.vue")
        }]



    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
    linkExactActiveClass: 'vue-school-active-class',
});

export default router;