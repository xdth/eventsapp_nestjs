import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events.controller';
import { CatsController } from './cats.controller';

@Module({
  imports: [],
  controllers: [AppController, EventsController, CatsController],
  providers: [AppService],
})
export class AppModule {}
