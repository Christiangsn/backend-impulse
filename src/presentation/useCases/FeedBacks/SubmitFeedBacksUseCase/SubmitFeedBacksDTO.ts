import { IServiceResponse, IUseCaseServices } from "@presentation/Contracts/useCases"

export interface IDTOSubmitFeedbacks {
    type: string
    comment: string
    screenshot: string
}

export interface IDTOSubmitFeedbacksServices extends IUseCaseServices {
    execute: ({ type, comment, screenshot}: IDTOSubmitFeedbacks) => Promise<IServiceResponse>
}

