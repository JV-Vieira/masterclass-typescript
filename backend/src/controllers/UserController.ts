import { Request, Response } from 'express'
import EmailService
 from '../services/EmailService';
const users = [
  { name: 'Joao', email: 'Joao Victor Vieira'},
]

//toda vez que for cadastrar um cliente vai mandar uma mensagem para ela
export default {
  async index (req: Request, res: Response){
    return res.json(users)
  },

  async create (req: Request, res: Response) {
    const emailService = new EmailService();
//acrescenta o nome dos parametros
    emailService.sendMail({
      to: { 
      name: 'Joao Victor Vieira', 
      email: 'joaovictorvieira153@gmail.com'
    },
      message: { 
      subject: 'Seja bem-vindo ao sistema', 
      body: 'Sejas' }
    });

    return res.send();
    //resposta
  }
};