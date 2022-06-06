import { NodeMailerMailAdapter } from '@core/Mail/Nodemailer.MailAdapter';
import { IUseCaseControllers } from '@presentation/Contracts/useCases';
import { SubmitFeedBacksController } from '@presentation/useCases/FeedBacks/SubmitFeedBacksUseCase/Controller/SubmitFeedBacksController';
import { SubmitFeedBacksServices } from '@presentation/useCases/FeedBacks/SubmitFeedBacksUseCase/Services/SubmitFeedBacksServices';
import { PrismaFeedBacksRepository } from './../../../core/Prisma/PrismaFeedBacksRepository/PrismaFeedBacksRepository';

export const CreateFeedBacksFactory = (): IUseCaseControllers => {
    const createFeedBacksRepository = new PrismaFeedBacksRepository()
    const mailAdapter = new NodeMailerMailAdapter()
    const feedBackService = new SubmitFeedBacksServices(createFeedBacksRepository, mailAdapter)
 
    const submitController = new SubmitFeedBacksController(feedBackService)
    return submitController
}