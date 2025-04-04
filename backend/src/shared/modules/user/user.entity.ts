import { defaultClasses, getModelForClass, prop, modelOptions, Ref } from '@typegoose/typegoose';
import { TUser } from '../../types/user.type.js';
import { createSHA256 } from '../../helpers/hash.js';
import { FitnessBoxEntity } from '../fitness-box/fitness-box.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

// Создание коллеции для БД
@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements TUser {
  // @prop({ unique: true, required: true })
  // public userId: string;

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

  @prop({ required: false, default: 0 })
  public balance: number;

  @prop({ required: false, default: false })
  public subscribe: boolean;

  @prop({ required: false, default: '' })
  public subscribeEnd: string;

  @prop({
    ref: FitnessBoxEntity,
    required: true,
    default: [],
    _id: false,
  })
  public favouriteFitnessBoxId: Ref<FitnessBoxEntity>[];

  @prop({ required: false, default: [] })
  public notification: string[];

  constructor(userData: TUser) {
    super();

    // this.userId = userData.userId;
    this.name = userData.name;
    this.bithDate = userData.bithDate;
    this.password = userData.password;
    this.phone = userData.phone;
    this.mail = userData.mail;
    this.balance = userData.balance;
    this.subscribe = userData.subscribe;
    this.subscribeEnd = userData.subscribeEnd;
    this.favouriteFitnessBoxId = userData.favouriteFitnessBoxId;
    this.notification = userData.notification;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
