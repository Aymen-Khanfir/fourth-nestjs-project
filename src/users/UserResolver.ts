import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { UserSetting } from '../graphql/models/UserSetting';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { UsersService } from './users.service';
import { UserSettingsService } from '../user_settings/user_settings.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UsersService,
    private userSettingService: UserSettingsService,
  ) {}

  @Query(() => [User])
  getUser() {
    return this.userService.getUsers();
  }

  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  // @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  // getUserSettings(@Parent() user: User) {
  //   return this.userSettingService.getUserSettingById(user.id);
  // }

  @Mutation((returns) => User)
  createUser(@Args('createUserInput') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }
}
