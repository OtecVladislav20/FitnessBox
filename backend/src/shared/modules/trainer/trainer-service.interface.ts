import { DocumentType } from '@typegoose/typegoose';
import { CreateTrainerDto } from './dto/create-trainer.dto';


// Все методы, которые мы можем совершать над сущностью пользователя
export interface TrainerService {
  create(dto: CreateTrainerDto, salt: string): Promise<DocumentType<TrainerEntity>>;
  findByEmail(mail: string): Promise<DocumentType<TrainerEntity> | null>;
  findOrCreate(dto: CreateTrainerDto, salt: string): Promise<DocumentType<TrainerEntity>>;
  updateById(trainerId: string, dto: UpdateTrainerDto): Promise<DocumentType<TrainerEntity> | null>;
}
