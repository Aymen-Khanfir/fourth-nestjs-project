import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSettingsService } from './user_settings.service';
import { UserSetting } from '../graphql/models/UserSetting';
import { UserSettingsResolver } from '../graphql/resolvers/UserSettingsResolver';
import { User } from '../graphql/models/User';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [UserSettingsService, UserSettingsResolver],
})
export class UserSettingsModule {}
