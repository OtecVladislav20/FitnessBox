import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { TUser } from '../../types/user.type.js';
import { createSHA256 } from '../../helpers/hash.js';

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
  @prop({ unique: true, required: true })
  public mail: string;

  @prop({ required: false, default: '' })
  public avatarPath: string;

  @prop({ required: true, default: '' })
  public firstname: string;

  @prop({ required: true, default: '' })
  public lastname: string;

  @prop({ required: true, default: '' })
  private password?: string;

  constructor(userData: TUser) {
    super();

    this.mail = userData.mail;
    this.avatarPath = userData.avatarPath;
    this.firstname = userData.firstname;
    this.lastname = userData.lastname;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
