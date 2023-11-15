import { createTransport, Transporter } from "nodemailer";

export class MailService {
    private transporter: Transporter<any>;

    constructor() {
        const {
            SMTP_HOST="smtp.yandex.ru",
            SMTP_PORT=465,
            SMTP_USER,
            SMTP_PASSWORD,
            API_URL = 'http://localhost:5000',
            CLIENT_URL = 'http://localhost:3000'
        } = process.env;

        this.transporter = createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "pobritay@gmail.com",
                pass: "yfrx rvut gzvx xpiq",
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }

    async sendActivationMail(to: string, link: string) {
        const { API_URL, CLIENT_URL } = process.env;

        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + (API_URL || 'http://localhost:5000'),
            text: '',
            html:
                `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        });
    }
}
