import { Authentication } from '@/data/services/authentication'
import { errorHandler, noContent, unauthorized } from '../contracts/http'
import { Middleware } from '../contracts/middleware'
import { requiredParams } from '../helper/requireParams'

export class AuthMiddleware implements Middleware {
    constructor(private readonly authentication: Authentication){}

    async handle(httpRequest: any) {
        const error = requiredParams(['cookie'], httpRequest)
        if(error){
            return errorHandler(error.response)
        }

        const token = httpRequest.cookie.split('=')[1]        
        const isAuthenticated = await this.authentication.auth(token)
        if(!isAuthenticated){
            return unauthorized('Token invalid!')
        }

        return noContent()
    }
}