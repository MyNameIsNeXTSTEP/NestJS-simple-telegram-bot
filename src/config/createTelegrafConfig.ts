/* eslint-disable prettier/prettier */
import { BotModule } from '../bot.module';
import { sessionMiddleware } from '../middleware/session.middleware';
import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';

export const createTelegrafConfig = (
  configService: ConfigService,
): TelegrafModuleOptions => ({
  token: configService.getOrThrow('telegram').token,
  middlewares: [sessionMiddleware],
  include: [BotModule],
});
