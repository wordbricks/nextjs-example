import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextController } from './text/text.controller';

@Module({
  imports: [],
  controllers: [AppController, TextController],
  providers: [AppService],
})
export class AppModule {}
