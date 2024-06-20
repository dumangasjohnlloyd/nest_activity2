import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModuleEntity } from './user-module/entities/user-module.entity';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'my_database',
      entities: [UserModuleEntity],
      synchronize: false,
    }),
    UserModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
