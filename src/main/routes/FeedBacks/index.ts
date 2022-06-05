import { CreateFeedBacksFactory } from "@main/Factories/FeedBacks/CreateFeedBacksFactory"
import { Router } from "express"


export default (router: Router): void => {
  router.post('/feedbacks', (req, res) => CreateFeedBacksFactory().run(req, res))
}