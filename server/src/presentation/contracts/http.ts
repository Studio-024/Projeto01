export type HttpResponse<T = any> = {
    statusCode: number
    data: T
	cookie?: string
}

export type HttpRequest <T = any>= {
	body?: T
	query?: T
	headers?: T
}

export const ok = (data: any): HttpResponse => ({
	statusCode: 200,
	data
})

export const noContent = (): HttpResponse => ({
	statusCode: 200,
	data: null
})

export const cookie = (cookie: string): HttpResponse => ({
	statusCode: 200,
	data: null,
	cookie
})

export const unauthorized  = (data: string): HttpResponse => ({
	statusCode: 401,
	data: {
		status: 401,
    	message: data,
    	stack: 'undefined'
  	}
})

export const errorHandler = (error: {status: number, message: string,  stack: string}): HttpResponse => ({
	statusCode: error.status || 500,
  	data: {
    	status: error.status || 500,
    	message: error.message || 'ops',
    	stack: error.stack.split('\n').slice(0)[0] || 'undefined'
  	}
})