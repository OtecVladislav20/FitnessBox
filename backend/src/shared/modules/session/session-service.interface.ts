import { DocumentType } from '@typegoose/typegoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { SessionEntity } from './session.entity';


export interface SessionService {
  create(dto: CreateSessionDto): Promise<DocumentType<SessionEntity>>;
  findByUserId(userId: string): Promise<DocumentType<SessionEntity>[]>;
  findById(sessionId: string): Promise<DocumentType<SessionEntity> | null>;
  find(): Promise<DocumentType<SessionEntity>[]>;
  deleteById(sessionId: string): Promise<DocumentType<SessionEntity> | null>;

  // updateById(session: string, dto: UpdateSessionDto): Promise<DocumentType<SessionEntity> | null>;
}
