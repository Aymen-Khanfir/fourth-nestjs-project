import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserSettingsResolver } from './graphql/resolvers/UserSettingsResolver';
import { User } from './graphql/models/User';
import { UserSetting } from './graphql/models/UserSetting';
import { UsersModule } from './users/users.module';
import { UserSettingsService } from './user_settings/user_settings.service';
import { UserSettingsModule } from './user_settings/user_settings.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'graphql',
      entities: [User, UserSetting],
      synchronize: true,
    }),
    UsersModule,
    UserSettingsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
