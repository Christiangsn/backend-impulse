import { SubmitFeedBacksServices } from "./SubmitFeedBacksServices"

const makeSut = () => {
    const createFeedbackSpy = jest.fn()
    const sendMailSpy = jest.fn()
    
    const sut = new SubmitFeedBacksServices(
        { create: createFeedbackSpy },
        { sendMail: sendMailSpy }
    )

    return { sut, createFeedbackSpy, sendMailSpy }
}

describe('Submit FeedbackServices useCases', () => {
    
    it('Should be able to call injected functions', async () => {
        const { sut, createFeedbackSpy, sendMailSpy } = makeSut()

        const sutRequest = await sut.execute({
            type: 'BUG',
            comment: 'Exemplo comment',
            screenshot: 'data:image/png;base64,dsaiodjsaiodjsaoi'
        })

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('Should be able to submit a feedback', async () => {

        const { sut } = makeSut()

        const sutRequest = await sut.execute({
            type: 'BUG',
            comment: 'Exemplo comment',
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

    it('Sould return 400 if an required parameter a comment', async () => {
        const { sut } = makeSut()

        const sutRequest = await sut.execute({
            type: 'BUG',
            comment: ''
        })

        expect(sutRequest).toEqual({ status: 400, body: 'Comment is required.' })
    })

    it('Sould return 400 if an required parameter a type', async () => {
        const { sut } = makeSut()

        const sutRequest = await sut.execute({
            type: '',
            comment: 'Exemplo comment'
        })

        expect(sutRequest).toEqual({ status: 400, body: 'Type is required.' })
    })

    
})