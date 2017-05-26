import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PollVote from '@/components/PollVote'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/:uid', name: 'PollVote', component: PollVote}
  ]
})
