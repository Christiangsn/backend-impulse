import { createTransport } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

import { IMailAdapter, ISendMailData } from "@domain/Adapters/Mail/IMailAdapter";


export class NodeMailerMailAdapter implements IMailAdapter {
    private transporter: Mail
    
    constructor (){
        this.transporter = createTransport({
            host: process.env.HOST_MAIL,
            port: Number(process.env.HOST_PORT),
            auth: {
                user: process.env.HOST_USER,
                pass: process.env.HOST_PASS
            }
        })
    }

    async sendMail ({ body, subject }: ISendMailData): Promise<void> {
        await this.transporter.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Christian Guimarães <christianguimaraes1996@gmail.com',
            subject: subject,
            html: body
        })
    }

}