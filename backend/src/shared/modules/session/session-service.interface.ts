import { DocumentType } from '@typegoose/typegoose';
import { CreateSessionDto } from './dto/create-session.dto.js';
import { SessionEntity } from './session.entity.js';


export interface SessionService {
  create(dto: CreateSessionDto): Promise<DocumentType<SessionEntity>>;
  findByFitnessBoxId(findByFitnessBoxId: string): Promise<DocumentType<SessionEntity>[] | null>;
  findByUserId(userId: string): Promise<DocumentType<SessionEntity>[] | null>;
  findById(sessionId: string): Promise<DocumentType<SessionEntity> | null>;
  find(): Promise<DocumentType<SessionEntity>[]>;
  findByDate(date: string, hour: string): Promise<DocumentType<SessionEntity> | null>;
}
