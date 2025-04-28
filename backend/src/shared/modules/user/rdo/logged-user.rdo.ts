import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  @Expose()
  public mail: string;

  @Expose()
  public token: string;
}
