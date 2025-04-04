import { DocumentType } from '@typegoose/typegoose';
import { CreateFitnessBoxDto } from './dto/create-fitness-box.dto';
import { FitnessBoxEntity } from './fitness-box.entity';


export interface FitnessBoxService {
  create(dto: CreateFitnessBoxDto): Promise<DocumentType<FitnessBoxEntity>>;
  findById(fitnessBoxId: string): Promise<DocumentType<FitnessBoxEntity> | null>;
  findByName(name: string): Promise<DocumentType<FitnessBoxEntity> | null>;
  incVisited(fitnessBoxId: string): Promise<DocumentType<FitnessBoxEntity> | null>;
  updateScore(fitnessBoxId: string): Promise<DocumentType<FitnessBoxEntity> | null>;
}
