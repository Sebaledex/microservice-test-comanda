import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { COMANDA, ORDER } from 'src/common/models/models';
import { ComandaController } from './comanda.controller';
import { ComandaService } from './comanda.service';
import { ComandaSchema } from './schema/comanda.schema';


@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: COMANDA.name,
        useFactory: () => ComandaSchema.plugin(require('mongoose-autopopulate')),
      },
      {
        name: ORDER.name,
        useFactory: () => ComandaSchema,
      },
    ]),
  ],
  controllers: [ComandaController],
  providers: [ComandaService],
})
export class ComandaModule {}