import { DocumentType } from '@typegoose/typegoose';
import { TrainerEntity } from './trainer.entity';
import { CreateTrainerDto } from './dto/create-trainer.dto';

export interface TrainerService {
  create(dto: CreateTrainerDto, salt: string): Promise<DocumentType<TrainerEntity>>;
  findByEmail(mail: string): Promise<DocumentType<TrainerEntity> | null>;
  findOrCreate(dto: CreateTrainerDto, salt: string): Promise<DocumentType<TrainerEntity>>;

  // updateById(trainerId: string, dto: UpdateTrainerDto): Promise<DocumentType<TrainerEntity> | null>;
}
