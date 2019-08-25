import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})