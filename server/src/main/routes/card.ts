import { Router } from 'express'

import { adaptMiddleware } from '../adapters/expressMiddlewareAdapter'
import { adaptRoute } from '../adapters/expressRouterAdapter'

import { makeAddCardController } from '../factories/addCardController'
import { makeListCardController } from '../factories/listCardController'
import { makeReviewCardController } from '../factories/reviewCardController'
import { makeSignInUserController } from '../factories/signInUserController'
import { makesignUpUserController } from '../factories/signUpUserController'

import { makeAuthMiddleware } from '../factories/middlewares/middlewareAdapter'
import { adaptRouteCookie } from '../adapters/expressRouterCookieAdapter'

const routes = Router()

routes.get('/card',adaptMiddleware(makeAuthMiddleware()) ,adaptRoute(makeListCardController()))

routes.post('/card', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddCardController()))

routes.put('/card/review', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeReviewCardController()))


routes.post('/user/signUp', adaptRoute(makesignUpUserController()))

routes.post('/user/login', adaptRouteCookie(makeSignInUserController()))


export default routes