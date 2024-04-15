import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../graphql/models/User';
import { UserSettingsService } from '../user_settings/user_settings.service';
import { UserSetting } from '../graphql/models/UserSetting';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [UserResolver, UsersService, UserSettingsService],
})
export class UsersModule {}
