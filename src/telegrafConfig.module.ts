/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';
import configuration from './config/configuration';

export interface TelegrafConfigModuleOptions {
  useFactory: (configService: ConfigService) => TelegrafModuleOptions;
  inject: [typeof ConfigService];
}

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [
    {
      provide: 'TELEGRAF_MODULE_OPTIONS',
      useFactory: (configService: ConfigService) => {
        return { token: configService.get('telegram').token };
      },
      inject: [ConfigService],
    },
  ],
  exports: ['TELEGRAF_MODULE_OPTIONS'],
})
export class TelegrafConfigModule {}