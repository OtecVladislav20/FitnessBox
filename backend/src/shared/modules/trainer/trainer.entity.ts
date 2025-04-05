import { defaultClasses, getModelForClass, prop, modelOptions, mongoose } from '@typegoose/typegoose';
import { createSHA256 } from '../../helpers/hash.js';
// import { FitnessBoxEntity } from '../fitness-box/fitness-box.entity.js';
import { TTrainer } from '../../types/trainer.type.js';


@modelOptions({ schemaOptions: { _id: false } })
export class PriceEntity {
  [key: string]: string;
}

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
  @prop({ type: String, required: false, default: ''})
  public imagePreview: string;

  @prop({ type: String, unique: true, required: true })
  public name: string;

  @prop({ type: String, unique: false, required: true })
  public bithDate: string;

  @prop({ type: String, required: false, default: '' })
  public password: string;

  @prop({ type: String, unique: true, required: true })
  public phone: string;

  @prop({ type: String, unique: true, required: true })
  public mail: string;

  @prop({ type: String, required: false, default: '' })
  public telegram: string;

  @prop({ type: String, required: false, default: '' })
  public whatsapp: string;

  @prop({ type: [String], required: false, default: [] })
  public specialization: string[];

  @prop({ type: [String], required: false, default: [] })
  public education: string[];

  @prop({ type: [String], required: false, default: [] })
  public merits: string[];

  @prop({ type: [String], required: false, default: [] })
  public workDate: string[];

  @prop({ type: [String], required: false, default: [] })
  public workTime: string[];

  // @prop({
  //   ref: FitnessBoxEntity,
  //   required: true,
  //   default: [],
  //   _id: false,
  // })
  // public fitnessBoxesId: Ref<FitnessBoxEntity>[];

  @prop({ type: PriceEntity, required: false, default: {} })
  public price: Record<string, string>;

  @prop({ type: Boolean, required: false, default: true })
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
