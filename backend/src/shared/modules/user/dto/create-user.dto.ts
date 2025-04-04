export class CreateUserDto {
  public userId: string;
  public name: string;
  public bithDate: string;
  public password: string;
  public phone: string;
  public mail: string;
  public balance: number;
  public subscribe: boolean;
  public subscribeEnd: string;
  // public favouriteFitnessBoxId: string[];
  public notification: string[];
}
