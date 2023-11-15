import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { MailService } from "src/mail/mail.service";
import { TokenModule } from "src/token/token.module";
import { TokenService } from "src/token/token.service";
import { User, UserSchema } from "./schemas/user.schemas";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [TokenModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService, MailService]
})
export class UserModule {
    
};