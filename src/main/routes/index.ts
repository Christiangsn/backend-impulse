import express, { Router } from 'express'
import feedbacksRouter from './FeedBacks'

export const routes = (app: express.Application): void => {
  const router = Router()
  app.use('/api', router)
  feedbacksRouter(router)
}