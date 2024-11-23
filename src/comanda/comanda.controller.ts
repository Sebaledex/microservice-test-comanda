import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ComandaMSG } from 'src/common/constants';
import { ComandaService } from './comanda.service';
import { ComandaDTO } from './dto/comanda.dto';

@Controller()
export class ComandaController {
  constructor(private readonly comandaService: ComandaService) {}

  @MessagePattern(ComandaMSG.CREATE)
  create(@Payload() comandaDTO: ComandaDTO) {
    return this.comandaService.create(comandaDTO);
  }

  @MessagePattern(ComandaMSG.FIND_ALL)
  findAll() {
    return this.comandaService.findAll();
  }
}