import { createTransport, Transporter } from "nodemailer";

export class MailService {
    private transporter: Transporter<any>;
    constructor() {
        this.transporter = createTransport({
            host: process.env.SMTP_HOST || 'smtp.example.com',
            port: Number(process.env.SMTP_PORT) || 587, // Значение по умолчанию 587, если порт не установлен в переменных окружения
            secure: false,
            auth: {
                user: process.env.SMTP_USER || 'user@example.com',
                pass: process.env.SMTP_PASSWORD || 'password'
            }
        })
    }

    async sendActivationMail(to: string, link: string) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL || 'http://localhost:3000', // Значение по умолчанию, если API_URL не установлено
            text: '',
            html:
                `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }
}
