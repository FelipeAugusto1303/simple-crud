import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import Library from './components/Library/library.model';


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
  controllers: [],
  providers: [],
})
export class AppModule {}
