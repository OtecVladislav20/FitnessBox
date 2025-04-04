import { TPrice } from '../../../types/trainer.type';

export class CreateTrainerDto {
  // public trainerId: string;
  public imagePreview: string;
  public name: string;
  public bithDate: string;
  public password: string;
  public phone: string;
  public mail: string;
  public telegram: string;
  public whatsapp: string;
  public specialization: string[];
  public education: string[];
  public merits: string[];
  public workDate: string[];
  public workTime: string[];
  // public fitnessBoxesId: string[];
  public price: TPrice;
  public readyToWork: boolean;
}
