import { Body, Controller, Post } from '@nestjs/common';
import { TextService } from './text.service';

@Controller('text')
export class TextController {
  constructor(private readonly textService: TextService) {}

  @Post('reverse')
  reverseText(@Body('text') text: string): string {
    return this.textService.reverseText(text);
  }
}
