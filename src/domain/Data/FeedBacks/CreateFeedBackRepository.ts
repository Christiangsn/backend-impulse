interface FeedBackCreateData {
    type: string
    comment: string
    screenshot: string
}

export interface FeedBacksRepository {
    create: ({ type, comment, screenshot}: FeedBackCreateData) => void
}
