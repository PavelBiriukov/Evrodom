import { createTransport, Transporter } from "nodemailer";
import { OrdersDto } from "src/orders/dto/orders.dto";

export class MailService {
    private transporter: Transporter<any>;

    constructor() {
        const {
            SMTP_HOST = "smtp.yandex.ru",
            SMTP_PORT = 465,
            SMTP_USER,
            SMTP_PASSWORD,
            API_URL = 'http://eurodom.kg/api/',
            CLIENT_URL = 'http://eurodom.kg/'
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
    async orders(order: OrdersDto) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'svetachev_daniil@mail.ru',
            subject: `Заказ от пользователя: ${order.lname} ${order.name}. ${order.data}`,
            text: '',
            html: `
                <div>
                    <h1>Заказ: </h1>
                    <div>
                        <h2>Данные пользователя: </h2>
                        <ul>
                            <li>Дата оформления заказа: ${order.data}</li>
                            <li>ИФО: ${order.lname} ${order.name} ${order.mname}</li>
                            <li>Почта: ${order.email}</li>
                            <li>Телефон: ${order.phone}</li>
                            <li>Адрес: ${order.region} ${order.city} ${order.address}</li>
                            <li>Доставка: ${order.deliveryMethod} </li>
                            <li>Оплата: ${order.paymentMethod}</li>
                            <li>Комментарии к заказу: ${order.comment}</li>
                            <li>Сумма заказа: ${order.totalAmount}</li>
                        <ul/> 
                    </div>
                    <div>
                        <h1>Товары: </h1>
                        ${order.products.map((item, index) => `
                            <div>
                                <h2>Товар ${index + 1}:</h2>
                                <ul>
                                    <li>Название: ${item.name}</li>
                                    <li>Категория: ${item.category}</li>
                                    <li>Производитель: ${item.maker}</li>
                                    <li>Цена: ${item.price}</li>
                                    <li>Количество: ${item.quantity}</li>
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `,
        });
    }
}
