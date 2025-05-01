import { inject, injectable } from 'inversify';
import { DocumentType, types } from '@typegoose/typegoose';
import { SessionService } from './session-service.interface.js';
import { SessionEntity } from './session.entity.js';
import { CreateSessionDto } from './dto/create-session.dto.js';
import { Component } from '../../types/component.enum.js';
import { UpdateSessionDto } from './dto/update-session.dto.js';


@injectable()
export class DefaultSessionService implements SessionService {
  constructor(
    @inject(Component.SessionModel) private readonly sessionModel: types.ModelType<SessionEntity>
  ) {}

  public async create(dto: CreateSessionDto): Promise<DocumentType<SessionEntity>> {
    const session = await this.sessionModel.create(dto);
    return session.populate('userId');
  }

  public async find(): Promise<DocumentType<SessionEntity>[]> {
    return this.sessionModel
      .find()
      .populate(['fitnessBoxId'])
      .populate(['userId'])
      .exec();
  }

  public async findById(id: string): Promise<DocumentType<SessionEntity> | null> {
    return this.sessionModel.findById(id)
      .populate(['fitnessBoxId'])
      .populate(['userId'])
      .exec();
  }

  public async findByUserId(userId: string): Promise<DocumentType<SessionEntity>[] | null> {
    return this.sessionModel
      .find({userId})
      .populate(['fitnessBoxId'])
      .populate(['userId'])
      .exec();
  }

  public async findByFitnessBoxId(fitnessBoxId: string): Promise<DocumentType<SessionEntity>[] | null> {
    return this.sessionModel
      .find({fitnessBoxId})
      .populate(['fitnessBoxId'])
      .populate(['userId'])
      .exec();
  }

  public async findByTrainerId(trainerId: string): Promise<DocumentType<SessionEntity>[] | null> {
    return this.sessionModel
      .find({trainerId})
      .populate(['fitnessBoxId'])
      .populate(['userId'])
      .exec();
  }


  public async findByDate(date: string, hour: string): Promise<DocumentType<SessionEntity> | null> {
    return this.sessionModel.findOne({date: date, hour: hour})
      .populate(['fitnessBoxId'])
      .populate(['userId'])
      .exec();
  }

  public async updateById(sessionId: string, dto: UpdateSessionDto): Promise<DocumentType<SessionEntity> | null> {
    return this.sessionModel
      .findByIdAndUpdate(sessionId, dto, {new: true})
      .populate(['userId', 'trainerId', 'fitnessBoxId'])
      .exec();
  }
}
