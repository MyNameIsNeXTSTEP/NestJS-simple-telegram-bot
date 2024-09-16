/* eslint-disable prettier/prettier */
// import { TelegrafConfigModule } from 'src/telegrafConfig.module';
import { BotModule } from '../bot.module';
import { sessionMiddleware } from '../middleware/session.middleware';
import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';

export const createTelegrafConfig = (
  configService: ConfigService,
): TelegrafModuleOptions => ({
  token: configService.get('telegram').token,
  botName: 'NestjsSimpleTelegram_bot',
  middlewares: [sessionMiddleware],
  include: [BotModule],
});
