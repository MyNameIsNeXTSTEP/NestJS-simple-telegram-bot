/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppUpdate } from './app.update';
import { AppService } from './app.service';
import { SessionMiddleware } from './middleware/Session';
import configuration from './config/configuration';
import { createConnection } from 'mysql2';
import { User } from './models/user';
import { TelegrafConfigModule } from './telegrafConfig.module';
import { UserModule } from './user.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { createTelegrafConfig } from './config/createTelegrafConfig';
import { BotModule } from './bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TelegrafModule.forRootAsync({
      inject: [ConfigService],
      useFactory: createTelegrafConfig,
    }),
    BotModule,
    // TelegrafConfigModule,
    UserModule,
  ],

  providers: [
    {
      // Might be done injectable for the User model (with `provide`)
      // for now it's considered using a new instance of a User
      provide: 'MYSQL_CONNECTION',
      useFactory: (configService: ConfigService) => {
        const connection = createConnection(configService.get('dbConfig'));
        return new User(connection);
      },
      inject: [ConfigService],
    },
    // SessionMiddleware,
    {
      provide: 'DEFAULT_BOT_NAME',
      useValue: 'NestjsSimpleTelegram_bot',
    },
    AppUpdate,
    AppService,
  ],
})

export class AppModule {};

// implements NestModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(SessionMiddleware).forRoutes('*');
  // };
// };
