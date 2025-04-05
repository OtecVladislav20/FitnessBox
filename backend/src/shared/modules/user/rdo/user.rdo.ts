import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public userId: string;

  @Expose()
  public name: string;

  @Expose()
  public bithDate: string;

  @Expose()
  public phone: string;

  @Expose()
  public mail: string;

  @Expose()
  public balance: number;

  @Expose()
  public subscribe: boolean;

  @Expose()
  public subscribeEnd: string;

  @Expose()
  public notification: string[];
}
