import { IController } from '@/presentation/contracts/controller'
import { Request, Response } from 'express'

export const adaptRouteCookie = (controller: IController) => {
	return async (req: Request, res: Response) => {
		const httpResponse = await controller.handle(req)
        res.cookie('x-access-token', httpResponse.cookie, { httpOnly: true })
    	res.status(httpResponse.statusCode).json(httpResponse.data)
  	}
}