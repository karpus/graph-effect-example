import Vue from 'vue'
import Router from 'vue-router'
import GraphContainer from '@/components/GraphContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: GraphContainer
    }
  ]
})
