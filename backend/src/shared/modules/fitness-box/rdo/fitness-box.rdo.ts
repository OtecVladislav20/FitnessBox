import { Expose } from 'class-transformer';

export class FitnessBoxRdo {
  @Expose()
  public id: string;

  @Expose()
  public name: string;

  @Expose()
  public imagePreview: string;

  @Expose()
  public idLock: string;

  @Expose()
  public adress: string;

  @Expose()
  public description: string;

  @Expose()
  public imagesBox: string[];

  @Expose()
  public location: number[];

  @Expose()
  public equipment: string[];

  @Expose()
  public visited: number;

  @Expose()
  public score: number;
}
