import { Injectable, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IComanda } from 'src/common/interfaces/comanda.interface';
import { COMANDA } from 'src/common/models/models';
import { ComandaDTO } from './dto/comanda.dto';

@Injectable()
export class ComandaService {
  constructor(
    @InjectModel(COMANDA.name) private readonly model: Model<IComanda>,
  ) {}

  async create(comandaDTO: ComandaDTO): Promise<IComanda> {
    const newPassenger = new this.model(comandaDTO);
    return await newPassenger.save();
  }

  async findAll(): Promise<IComanda[]> {
    return await this.model.find();
  }


}
