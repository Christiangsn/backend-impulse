import { IMailAdapter, ISendMailData } from "@domain/Adapters/Mail/IMailAdapter";

export class NodeMailerMailAdapter implements IMailAdapter {
    private transporter: Mail
    
    constructor (){
        this.transporter = 
    }

    sendMail ({ body, subject }: ISendMailData): Promise<void> {

    }

}