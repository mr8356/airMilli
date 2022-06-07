import { Get, Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  // movies 모듈이 추가됨
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {

}
