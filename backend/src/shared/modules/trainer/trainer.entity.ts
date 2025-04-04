import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { createSHA256 } from '../../helpers/hash.js';
// import { FitnessBoxEntity } from '../fitness-box/fitness-box.entity.js';
import { TPrice, TTrainer } from '../../types/trainer.type.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface TrainerEntity extends defaultClasses.Base {}

// Создание коллеции для БД
@modelOptions({
  schemaOptions: {
    collection: 'trainers',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class TrainerEntity extends defaultClasses.TimeStamps implements TTrainer {
  // @prop({ unique: true, required: true })
  // public userId: string;
  @prop({ required: false, default: ''})
  public imagePreview: string;

  @prop({ unique: true, required: true })
  public name: string;

  @prop({ unique: false, required: true })
  public bithDate: string;

  @prop({ required: false, default: '' })
  public password: string;

  @prop({ unique: true, required: true })
  public phone: string;

  @prop({ unique: true, required: true })
  public mail: string;

  @prop({ required: false, default: '' })
  public telegram: string;

  @prop({ required: false, default: '' })
  public whatsapp: string;

  @prop({ required: false, default: [] })
  public specialization: string[];

  @prop({ required: false, default: [] })
  public education: string[];

  @prop({ required: false, default: [] })
  public merits: string[];

  @prop({ required: false, default: [] })
  public workDate: string[];

  @prop({ required: false, default: [] })
  public workTime: string[];

  // @prop({
  //   ref: FitnessBoxEntity,
  //   required: true,
  //   default: [],
  //   _id: false,
  // })
  // public fitnessBoxesId: Ref<FitnessBoxEntity>[];

  @prop({ required: false, default: {} })
  public price: TPrice;

  @prop({ required: false, default: true })
  public readyToWork: boolean;

  constructor(trainerData: TTrainer) {
    super();

    // this.userId = userData.userId;
    this.imagePreview = trainerData.imagePreview;
    this.name = trainerData.name;
    this.bithDate = trainerData.bithDate;
    this.password = trainerData.password;
    this.phone = trainerData.phone;
    this.mail = trainerData.mail;
    this.telegram = trainerData.telegram;
    this.whatsapp = trainerData.whatsapp;
    this.specialization = trainerData.specialization;
    this.education = trainerData.education;
    this.merits = trainerData.merits;
    this.workDate = trainerData.workDate;
    this.workTime = trainerData.workTime;
    // this.fitnessBoxesId = trainerData.fitnessBoxesId;
    this.price = trainerData.price;
    this.readyToWork = trainerData.readyToWork;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const TrainerModel = getModelForClass(TrainerEntity);
