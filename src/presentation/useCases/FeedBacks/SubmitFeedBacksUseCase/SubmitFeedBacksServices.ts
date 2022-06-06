import { ICreateFeedBackRepository } from "@domain/Data/FeedBacks/ICreateFeedBackRepository"
import { IServiceResponse } from "@presentation/Contracts/useCases"
import { IDTOSubmitFeedbacks, IDTOSubmitFeedbacksServices } from "./SubmitFeedBacksDTO"

export class SubmitFeedBacksServices implements IDTOSubmitFeedbacksServices {
    
    constructor(
        private createFeedbacksRepository: ICreateFeedBackRepository
    ){}
 
    async execute ({ type, comment, screenshot }: IDTOSubmitFeedbacks): Promise<IServiceResponse> {
        await this.createFeedbacksRepository.create({ type, comment, screenshot })

        return {
            body: 'FeedBack Criado com Sucesso',
            status: 201
        }
    }
}