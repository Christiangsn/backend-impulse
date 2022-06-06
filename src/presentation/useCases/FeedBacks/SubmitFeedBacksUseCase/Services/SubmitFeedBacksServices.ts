import { IMailAdapter } from '@domain/Adapters/Mail/IMailAdapter'
import { ICreateFeedBackRepository } from "@domain/Data/FeedBacks/ICreateFeedBackRepository"
import { IServiceResponse } from "@presentation/Contracts/useCases"
import { IDTOSubmitFeedbacks, IDTOSubmitFeedbacksServices } from "../SubmitFeedBacksDTO"

export class SubmitFeedBacksServices implements IDTOSubmitFeedbacksServices {
    
    constructor(
        private createFeedbacksRepository: ICreateFeedBackRepository,
        private mailAdapter: IMailAdapter
    ){}
 
    async execute ({ type, comment, screenshot }: IDTOSubmitFeedbacks): Promise<IServiceResponse> {

        if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
            return {
                body: 'Invalid screenshot format.',
                status: 400
            }
        }

        await this.createFeedbacksRepository.create({ type, comment, screenshot })
        await this.mailAdapter.sendMail({ 
            subject: 'Novo FeedBack',
            body: [
                `<div style="font-family: san-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type} </p>`,
                `<p>Comentário: ${comment} </p>`,
                `</div>`
            ].join('\n')
        })

        return {
            body: 'FeedBack Criado com Sucesso',
            status: 201
        }
    }
}