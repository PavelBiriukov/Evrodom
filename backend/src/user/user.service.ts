import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schemas';
import { TokenService } from '../token/token.service';
import * as bcrypt from 'bcryptjs';
import * as uuid from 'uuid'
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private tokenService: TokenService,
        private mailService: MailService,
    ) {}

    async registration(email: string, password: string): Promise<any> {
        const candidate = await this.userModel.findOne({ email });
        if (candidate) {
            throw new BadRequestException(`Пользователь с почтовым адресом ${email} уже существует`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4(); // v34fa-asfasf-142saf-sa-asf

        const user = await this.userModel.create({ email, password: hashPassword, activationLink });
        await this.mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = this.tokenService.generateTokens({ ...userDto });
        await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

    async activate(activationLink: string): Promise<void> {
        const user = await this.userModel.findOne({ activationLink });
        if (!user) {
            throw new BadRequestException('Неккоректная ссылка активации');
        }
        user.isActivated = true;
        await user.save();
    }

    async login(email: string, password: string): Promise<any> {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new BadRequestException('Пользователь с таким email не найден');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw new BadRequestException('Неверный пароль');
        }
        const userDto = new UserDto(user);
        const tokens = this.tokenService.generateTokens({ ...userDto });

        await this.tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
    }

    async logout(refreshToken: string): Promise<string> {
        const token = await this.tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken: string): Promise<any> {
        if (!refreshToken) {
            throw new UnauthorizedException();
        }
        const userData = this.tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await this.tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw new UnauthorizedException();
        }
        const user = await this.userModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = this.tokenService.generateTokens({ ...userDto });

        await this.tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
    }

    async getAllUsers(): Promise<any[]> {
        const users = await this.userModel.find();
        return users;
    }
}
