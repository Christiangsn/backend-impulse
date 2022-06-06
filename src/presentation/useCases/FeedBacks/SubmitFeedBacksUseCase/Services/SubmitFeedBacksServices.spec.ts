import { SubmitFeedBacksServices } from "./SubmitFeedBacksServices"


describe('Submit Feedback', () => {

    it('Should be able to submit a feedback', async () => {

        const makeSut = new SubmitFeedBacksServices(
            { create: async () => {} },
            { sendMail: async () => {} }
        )

        await expect(makeSut.execute({
            type: 'BUG',
            comment: 'Exemple comment',
            screenshot: 'test.jpg'
        })).resolves.not.toThrow()

    })
    
})