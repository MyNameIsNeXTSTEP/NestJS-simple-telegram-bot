/* eslint-disable prettier/prettier */
import { UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly appService: AppService,
  ) {
    (() => console.log(this.bot))();
  };

  @Start()
  async startCommand(ctx: Context) {
    console.log('Started!');
    await ctx.reply('Hi!');
  };

  @UseFilters()
  async handleUpdate(ctx: Context) {
    await this.appService.handleMessage(ctx);
  }
}
