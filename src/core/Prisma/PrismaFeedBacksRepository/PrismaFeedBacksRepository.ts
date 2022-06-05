import { ICreateFeedBackRepository, IFeedBackCreateData } from "@domain/Data/FeedBacks/ICreateFeedBackRepository"
import { prisma } from "../../DataBase/Prisma"

export class PrismaFeedBacksRepository implements ICreateFeedBackRepository {

    async create ({ type, comment, screenshot}: IFeedBackCreateData): Promise<void> {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }

}