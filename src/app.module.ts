import { Module } from '@nestjs/common';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    RecipeModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/my-db.sqlite3',
      autoLoadEntities: true,
      synchronize: true, // not for production
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
