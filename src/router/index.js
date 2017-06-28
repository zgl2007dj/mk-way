import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import loveVoice from '@/components/loveVoice'
import resume from '@/components/resume'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: home },
    { path: '/loveVoice', name: 'loveVoice', component: loveVoice },
    { path: '/resume', name: 'resume', component: resume }
  ]
})
