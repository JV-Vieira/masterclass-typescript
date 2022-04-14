"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Data Transfer Object (DDD)
//o to é objeto que precisa de 2 parametros (name and email)
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email enviado para ${to.name} : ${message.subject}`);
    }
}
exports.default = EmailService;
