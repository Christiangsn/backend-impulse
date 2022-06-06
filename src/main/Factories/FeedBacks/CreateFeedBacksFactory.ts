import { IUseCaseControllers } from '@presentation/Contracts/useCases';
import { SubmitFeedBacksController } from '@presentation/useCases/FeedBacks/SubmitFeedBacksUseCase/SubmitFeedBacksController';
import { SubmitFeedBacksServices } from '@presentation/useCases/FeedBacks/SubmitFeedBacksUseCase/SubmitFeedBacksServices';
import { PrismaFeedBacksRepository } from './../../../core/Prisma/PrismaFeedBacksRepository/PrismaFeedBacksRepository';

export const CreateFeedBacksFactory = (): IUseCaseControllers => {
    const createFeedBacksRepository = new PrismaFeedBacksRepository()
    const feedBackService = new SubmitFeedBacksServices(createFeedBacksRepository)
 
    const submitController = new SubmitFeedBacksController(feedBackService)
    return submitController
}