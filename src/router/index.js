import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/Login',
		name: 'Login',
		component: () => import('../views/LoginView.vue')
	},
	{
		path: '/Register',
		name: 'Register',
		component: () => import('../views/RegisterView.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
