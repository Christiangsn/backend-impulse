import { SubmitFeedBacksServices } from "./SubmitFeedBacksServices"

const makeSut = () => {
    const sut = new SubmitFeedBacksServices(
        { create: async () => {} },
        { sendMail: async () => {} }
    )

    return { sut }
}


describe('Submit Feedback', () => {

    it('Should be able to submit a feedback', async () => {

        const { sut } = makeSut()

        const sutRequest = await sut.execute({
            type: 'BUG',
            comment: 'Exemple comment',
            screenshot: 'data:image/png;base64,dsaiodjsaiodjsaoi'
        })

        expect(sutRequest).toEqual({ status: 201, body: 'FeedBack Criado com Sucesso' })

    })

    it('Sould return 400 if an invalid type screenshot', async () => {
        const { sut } = makeSut()

        const sutRequest = await sut.execute({
            type: 'BUG',
            comment: 'Exemple comment',
            screenshot: 'dsadsadsad'
        })

        expect(sutRequest).toEqual({ status: 400, body: 'Invalid screenshot format.' })
    })
    
})