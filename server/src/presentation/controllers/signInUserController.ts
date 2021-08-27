import { SignInUserService } from '@/data/services/signInUserService'
import { IUserLogin } from '@/domain/entities/userLogin'
import { IController } from '../contracts/controller'
import { cookie, errorHandler, HttpRequest, HttpResponse } from '../contracts/http'
import { requiredParams } from '../helper/requireParams'

export class SignInUserController implements IController {
    constructor(
        private readonly signInUserService: SignInUserService
    ){}

    async handle (request: HttpRequest): Promise<HttpResponse> {
        const error = requiredParams(['email', 'password'], request)
        if (error) {
            return errorHandler(error.response) 
        } 
        
        try {
            const user: IUserLogin = {
                ...request.body
            }            
            const token = await this.signInUserService.signIn(user)
            
            return cookie(token)
        } catch (error) {
            return errorHandler(error.response)
        }
    }
}