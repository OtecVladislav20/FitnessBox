import { DocumentType } from '@typegoose/typegoose';
import { CreateFitnessBoxDto } from './dto/create-fitness-box.dto.js';
import { FitnessBoxEntity } from './fitness-box.entity.js';


export interface FitnessBoxService {
  create(dto: CreateFitnessBoxDto): Promise<DocumentType<FitnessBoxEntity>>;
  findById(fitnessBoxId: string): Promise<DocumentType<FitnessBoxEntity> | null>;
  findByName(name: string): Promise<DocumentType<FitnessBoxEntity> | null>;
  incVisited(fitnessBoxId: string): Promise<DocumentType<FitnessBoxEntity> | null>;
  updateScore(fitnessBoxId: string): Promise<DocumentType<FitnessBoxEntity> | null>;
  find(): Promise<DocumentType<FitnessBoxEntity>[]>;
}
