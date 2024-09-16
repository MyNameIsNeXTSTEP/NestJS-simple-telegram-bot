/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppUpdate } from './app.update';
import { AppService } from './app.service';
import { createTelegrafConfig } from './config/createTelegrafConfig';

@Module({
  imports: [TelegrafModule.forRootAsync({ useFactory: createTelegrafConfig })],
  providers: [AppService],
  controllers: [AppUpdate],
})

export class BotModule {};
