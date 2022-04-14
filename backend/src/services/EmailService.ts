// quando é do tipo objeto usamos o interface
// o I: é da biblioteca com o padrão I
interface IMailTo{
  name: string;
  email: string;
}

interface ImailMessage{
  subject: string;
  body: string;
  attachment?: string[];
}
// 2 formmas de representar um array 1 passando o  Array<parametro>
// 2 []
//team playt string `${}`

// Parar criar um objeto para transferencia de dados para quando for criar uma interface, para definir como os dados vão trafegar
// dentro entre 2 arquivos diferentes dentro da nossa aplicação. DTO
interface IMessageDTO{
  to: IMailTo;
  message: ImailMessage;
}

//para que a interface siga algum modelo
interface IEmailService{
  sendMail(request: IMessageDTO): void;
}
// Data Transfer Object (DDD)
//o to é objeto que precisa de 2 parametros (name and email)
class EmailService{
  sendMail({to, message}: IMessageDTO) {
    console.log(`Email enviado para ${to.name} : ${message.subject}`);
  }

}

export default EmailService;