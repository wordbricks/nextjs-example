import { Test, TestingModule } from '@nestjs/testing';
import { TextController } from './text.controller';
import { TextModule } from './text.module';

describe('TextController', () => {
  let controller: TextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TextModule],
    }).compile();

    controller = module.get<TextController>(TextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
