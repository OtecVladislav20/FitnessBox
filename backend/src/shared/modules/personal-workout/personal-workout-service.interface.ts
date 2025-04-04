import { DocumentType } from '@typegoose/typegoose';
import { CreatePersonalWorkoutDto } from './dto/create-personal-workout.dto';
import { PersonalWorkoutEntity } from './personal-workout.entity';


export interface PersonalWorkoutService {
  create(dto: CreatePersonalWorkoutDto): Promise<DocumentType<PersonalWorkoutEntity>>;
  findById(personalWorkoutId: string): Promise<DocumentType<PersonalWorkoutEntity> | null>;
  findByUserId(userId: string): Promise<DocumentType<PersonalWorkoutEntity>[] | null>;
  findByTrainerId(trainerId: string): Promise<DocumentType<PersonalWorkoutEntity>[] | null>;
}
