import { DocumentType, types } from '@typegoose/typegoose';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { FitnessBoxService } from './fitness-box.interface.js';
import { FitnessBoxEntity } from './fitness-box.entity.js';
import { CreateFitnessBoxDto } from './dto/create-fitness-box.dto.js';


@injectable()
export class DefaultFitnessBoxService implements FitnessBoxService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.FitnessBoxModel) private readonly fitnessBoxModel: types.ModelType<FitnessBoxEntity>
  ) {}

  public async create(dto: CreateFitnessBoxDto): Promise<DocumentType<FitnessBoxEntity>> {
    const box = new FitnessBoxEntity(dto);

    const result = await this.fitnessBoxModel.create(box);
    this.logger.info(`New box created: ${box.name}`);

    return result;
  }

  public async findById(id: string): Promise<DocumentType<FitnessBoxEntity> | null> {
    return this.fitnessBoxModel.findById(id); // Используйте встроенный метод
  }

  public async findByName(name: string): Promise<DocumentType<FitnessBoxEntity> | null> {
    return this.fitnessBoxModel.findOne({name});
  }

  public async incVisited(fitnessBoxId: string): Promise<DocumentType<FitnessBoxEntity> | null> {
    return this.fitnessBoxModel
      .findByIdAndUpdate(fitnessBoxId, {'$inc': {
        visited: 1,
      }}).exec();
  }

  public async updateScore(fitnessBoxId: string): Promise<DocumentType<FitnessBoxEntity> | null> {
    return this.fitnessBoxModel
      .findByIdAndUpdate(fitnessBoxId, {'$inc': {
        score: 1,
      }}).exec();
  }

  public async find(): Promise<DocumentType<FitnessBoxEntity>[]> {
    return this.fitnessBoxModel.find();
  }
}
