/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';

export interface TelegrafConfigModuleOptions {
  useFactory: (configService: ConfigService) => TelegrafModuleOptions;
  inject: [typeof ConfigService];
}

@Module({
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