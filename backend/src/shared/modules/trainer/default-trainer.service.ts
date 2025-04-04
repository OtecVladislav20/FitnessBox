import { DocumentType, types } from '@typegoose/typegoose';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { TrainerService } from './trainer-service.interface.js';
import { CreateTrainerDto } from './dto/create-trainer.dto.js';
import { TrainerEntity } from './trainer.entity.js';


@injectable()
export class DefaultTrainerService implements TrainerService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.TrainerModel) private readonly trainerModel: types.ModelType<TrainerEntity>
  ) {}

  public async create(dto: CreateTrainerDto, salt: string): Promise<DocumentType<TrainerEntity>> {
    const trainer = new TrainerEntity(dto);
    trainer.setPassword(dto.password, salt);

    const result = await this.trainerModel.create(trainer);
    this.logger.info(`New user created: ${trainer.mail}`);

    return result;
  }

  public async findByEmail(mail: string): Promise<DocumentType<TrainerEntity> | null> {
    return this.trainerModel.findOne({mail});
  }

  public async findOrCreate(dto: CreateTrainerDto, salt: string): Promise<DocumentType<TrainerEntity>> {
    const existedTrainer = await this.findByEmail(dto.mail);

    if (existedTrainer) {
      return existedTrainer;
    }

    return this.create(dto, salt);
  }
}
