import { Response, Request } from 'express'

export interface IServiceResponse {
    status: number
    body: any
}

export interface IUseCaseServices {
    execute: (data: any) => Promise<IServiceResponse>
}

export interface IUseCaseControllers {
    run: (req: Request, res: Response) => Promise<Response>
}