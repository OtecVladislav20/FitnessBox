import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { TUser } from '../../types/user.type.js';
import { createSHA256 } from '../../helpers/hash.js';
// import { FitnessBoxEntity } from '../fitness-box/fitness-box.entity.js';

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

  @prop({ type: String, required: true })
  public name: string;

  @prop({ type: String, required: true })
  public bithDate: string;

  @prop({ type: String, required: false, default: '' })
  public password: string;

  @prop({ type: String, unique: true, required: true })
  public phone: string;

  @prop({ type: String, unique: true, required: true })
  public mail: string;

  @prop({ type: Number, required: false, default: 0 })
  public balance: number;

  @prop({ type: String, required: false, default: false })
  public subscribe: boolean;

  @prop({ type: String, required: false, default: '' })
  public subscribeEnd: string;

  // @prop({
  //   ref: FitnessBoxEntity,
  //   required: true,
  //   default: [],
  //   _id: false,
  // })
  // public favouriteFitnessBoxId: Ref<FitnessBoxEntity>[];

  @prop({ type: [String], required: false, default: [] })
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
    // this.favouriteFitnessBoxId = userData.favouriteFitnessBoxId;
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
