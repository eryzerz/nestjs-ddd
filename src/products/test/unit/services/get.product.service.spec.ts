import { Test, TestingModule } from '@nestjs/testing';
import { GetProductService } from '../../../services/get.product.service';

describe('GetProductService', () => {
  let service: GetProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetProductService],
    }).compile();

    service = module.get<GetProductService>(GetProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
