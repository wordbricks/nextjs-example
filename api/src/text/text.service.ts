import { Injectable } from '@nestjs/common';

@Injectable()
export class TextService {
  reverseText(text: string): string {
    return 'Hello World!';
  }
}
