import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { UserSettingsService } from '../../user_settings/user_settings.service';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UserSettingsService) {}

  @Mutation((returns) => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsInput')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    return await this.userSettingsService.createUserSetting(
      createUserSettingsData,
    );
  }
}
