import { DocumentType } from '@typegoose/typegoose';
import { CreatePersonalWorkoutDto } from './dto/create-personal-workout.dto';


export interface PersonalWorkoutService {
  create(dto: CreatePersonalWorkoutDto): Promise<DocumentType<PersonalWorkoutEntity>>;
  findById(personalWorkoutId: string): Promise<DocumentType<PersonalWorkoutEntity>>;
  findByUserId(userId: string): Promise<DocumentType<PersonalWorkoutEntity>>[];
  findByTrainerId(trainerId: string): Promise<DocumentType<PersonalWorkoutEntity>>[];
}
