import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionMiddleware } from './middleware/Session';
import configuration from './config/configuration';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConnectionOptions, createConnection } from 'mysql2';
import { User } from './models/user';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    // TelegrafModule.forRootAsync({})
  ],
  controllers: [AppController],
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
    SessionMiddleware,
    AppService,
  ],
});

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SessionMiddleware).forRoutes('*');
  };
};
