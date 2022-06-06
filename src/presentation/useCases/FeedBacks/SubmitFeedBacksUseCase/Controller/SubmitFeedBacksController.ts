import { Response, Request } from 'express'

import { IUseCaseControllers } from "@presentation/Contracts/useCases";
import { IServerError } from '@presentation/Errors/IServerError';
import { IDTOSubmitFeedbacksServices } from '../SubmitFeedBacksDTO';

export class SubmitFeedBacksController implements IUseCaseControllers {

    constructor(
        private submitFeedbacksService: IDTOSubmitFeedbacksServices
    ){}

    async run (req: Request, res: Response): Promise<Response> {
        const { type, comment, screenshot } = req.body

        try {
            const { status, body } = await this.submitFeedbacksService.execute({ type, comment, screenshot })
            return res.status(status).json({ status, body })
        } catch (err) {
            console.log('ERROR NO SUBMIT FEEDBACKS:')
            console.log(err)
            return res.status(500).json({
                Error: new IServerError(err).message
            })
        }

    }
}