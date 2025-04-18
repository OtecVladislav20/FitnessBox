import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { TFitnessBox } from '../../types/fitness-box.type.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface FitnessBoxEntity extends defaultClasses.Base {}

// Создание коллеции для БД
@modelOptions({
  schemaOptions: {
    collection: 'fitness-boxes',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class FitnessBoxEntity extends defaultClasses.TimeStamps implements TFitnessBox {
  // @prop({ unique: true, required: true })
  // public boxId: string;

  @prop({ type: String, unique: true, required: true})
  public name: string;

  @prop({ type: String, required: false, default: '' })
  public imagePreview: string;

  @prop({ type: String, unique: true, required: true })
  public idLock: string;

  @prop({ type: String, required: false, default: '' })
  public adress: string;

  @prop({ type: String, required: false, default: '' })
  public description: string;

  @prop({ type: [String], required: false, default: [] })
  public imagesBox: string[];

  @prop({ type: [Number], required: true })
  public location: number[];

  @prop({ type: [String], required: false, default: [] })
  public equipment: string[];

  @prop({ type: Number, required: false, default: 0 })
  public visited: number;

  @prop({ type: Number, required: false, default: 0 })
  public score: number;

  constructor(fitnessBoxData: TFitnessBox) {
    super();

    this.name = fitnessBoxData.name;
    this.imagePreview = fitnessBoxData.imagePreview;
    this.idLock = fitnessBoxData.idLock;
    this.adress = fitnessBoxData.adress;
    this.description = fitnessBoxData.description;
    this.imagesBox = fitnessBoxData.imagesBox;
    this.location = fitnessBoxData.location;
    this.equipment = fitnessBoxData.equipment;
    this.visited = fitnessBoxData.visited;
    this.score = fitnessBoxData.score;
  }
}

export const FitnessBoxModel = getModelForClass(FitnessBoxEntity);
