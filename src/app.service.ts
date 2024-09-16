/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Context } from 'telegraf';

@Injectable()
export class AppService {
  constructor(
    @Inject('DEFAULT_BOT_NAME') private readonly defaultBotName: string
  ) { };

  async handleMessage(ctx: Context) {
    console.log('Received message:', ctx.message);
  }
}
