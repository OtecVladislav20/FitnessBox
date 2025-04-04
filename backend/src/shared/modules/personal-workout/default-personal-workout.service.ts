import { DocumentType, types } from '@typegoose/typegoose';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { PersonalWorkoutService } from './personal-workout-service.interface.js';
import { PersonalWorkoutEntity } from './personal-workout.entity.js';
import { CreatePersonalWorkoutDto } from './dto/create-personal-workout.dto.js';


@injectable()
export class DefaultPersonalWorkoutService implements PersonalWorkoutService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.PersonalWorkoutModel) private readonly personalWorkoutModel: types.ModelType<PersonalWorkoutEntity>
  ) {}

  public async create(dto: CreatePersonalWorkoutDto): Promise<DocumentType<PersonalWorkoutEntity>> {
    const result = await this.personalWorkoutModel.create(dto);
    this.logger.info('New personalWorkout created');

    return result;
  }

  public async findById(personalWorkoutId: string): Promise<DocumentType<PersonalWorkoutEntity> | null> {
    return this.personalWorkoutModel.findOne({personalWorkoutId});
  }

  public async findByUserId(userId: string): Promise<DocumentType<PersonalWorkoutEntity>[] | null> {
    return this.personalWorkoutModel.find({userId});
  }

  public async findByTrainerId(trainerId: string): Promise<DocumentType<PersonalWorkoutEntity>[] | null> {
    return this.personalWorkoutModel.find({trainerId});
  }
}
