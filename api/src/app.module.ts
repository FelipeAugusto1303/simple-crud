import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { LibraryController } from './components/Library/library.controller';
import { Library } from './components/Library/library.model';
import { LibraryService } from './components/Library/library.service';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'library',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Library])
  ],
  controllers: [LibraryController],
  providers: [LibraryService],
})
export class AppModule {}
