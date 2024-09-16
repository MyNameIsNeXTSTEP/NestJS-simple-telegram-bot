/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { User } from "./models/user";

@Module({
  providers: [
    {
      provide: 'USER_MODEL',
      useClass: User,
    },
  ],
  exports: ['USER_MODEL'],
})
export class UserModule {};