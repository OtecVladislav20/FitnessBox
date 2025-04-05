import { inject, injectable } from 'inversify';
import { DocumentType, types } from '@typegoose/typegoose';
import { SessionService } from './session-service.interface.js';
import { SessionEntity } from './session.entity.js';
import { CreateSessionDto } from './dto/create-session.dto.js';
import { Component } from '../../types/component.enum.js';


@injectable()
export class DefaultSessionService implements SessionService {
  constructor(
    @inject(Component.SessionModel) private readonly sessionModel: types.ModelType<SessionEntity>
  ) {}

  public async create(dto: CreateSessionDto): Promise<DocumentType<SessionEntity>> {
    const session = await this.sessionModel.create(dto);
    return session.populate('userId');
  }

  public async findByUserId(userId: string): Promise<DocumentType<SessionEntity>[]> {
    return this.sessionModel
      .find({userId});
  }

  public async findById(sessionId: string): Promise<DocumentType<SessionEntity> | null> {
    return this.sessionModel
      .findById({sessionId});
  }

  public async find(): Promise<DocumentType<SessionEntity>[]> {
    return this.sessionModel
      .find()
      .populate(['userId'])
      .exec();
  }

  public async deleteById(sessionId: string): Promise<DocumentType<SessionEntity> | null> {
    return this.sessionModel
      .findByIdAndDelete(sessionId)
      .exec();
  }

  // public async updateById(sessionId: string, dto: UpdateSessionDto): Promise<DocumentType<SessionEntity> | null> {
  //   return this.sessionModel
  //     .findByIdAndUpdate(sessionId, dto, {new: true})
  //     .populate(['userId'])
  //     .exec();
  // }
}
