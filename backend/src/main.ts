import 'dotenv/config'
import { NestFactory } from "@nestjs/core";
const cookieParser = require('cookie-parser')
import { AppModule } from "./app.module";
const cors = require('cors');
import errorHandler from "./middlewares/error.middleware";


const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);
        app.enableCors({
            credentials: true,
            origin: process.env.CLIENT_URL
        });
        app.use('/api', cookieParser());
        app.use('/api', errorHandler);
        app.use(cors());
        await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()