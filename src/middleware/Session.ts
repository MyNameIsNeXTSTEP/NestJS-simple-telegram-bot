/* eslint-disable prettier/prettier */
import { Inject, Middleware } from '@nestjs/common';
import { ContextMessageUpdate } from 'telegraf';
import { User } from '../models/user';

@Middleware()
export class SessionMiddleware {
  constructor(
    @Inject('USER_MODEL') private readonly userModel: User
  ) { };

  async use(ctx: ContextMessageUpdate, next: () => Promise<any>) {
    const userId = ctx.from?.id;
    const user = await this.userModel.user(userId);

    // if (user) {
    //   ctx.session = sessionData[0].data;
    // } else {
    //   await this.userModel.addUser(userId, userName);
    // }

    await next();

    // Update session data in the database
    // await User.updateUser(userId, ctx.session);
  }
}