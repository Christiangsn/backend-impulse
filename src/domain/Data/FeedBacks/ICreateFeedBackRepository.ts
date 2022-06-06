export interface IFeedBackCreateData {
    type: string
    comment: string
    screenshot: string
}

export interface ICreateFeedBackRepository {
    create: ({ type, comment, screenshot}: IFeedBackCreateData) => Promise<void>
}
