import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { getToken, checkOauth } from '@/utils/auth'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 路由拦截
router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()

  if (hasToken) {
    next()
  } else {
    if (checkOauth()) {
      next()
    }
  }
})
export default router
