/* eslint-disable prettier/prettier */
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Context } from 'telegraf';
import { User } from '../models/user';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  constructor(
    @Inject('USER_MODEL') private readonly userModel: User
  ) { };

  async use(ctx: Context, next: () => Promise<any>) {
    const userId = ctx.from?.id;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await this.userModel.user(userId);

    // if (user) {
    //   ctx.session = sessionData[0].data;
    // } else {
    //   await this.userModel.addUser(userId, userName);
    // }
    console.log(11)
    await next();

    // Update session data in the database
    // await User.updateUser(userId, ctx.session);
  }
};
