export type TPrice = {
  [key: string]: string;
}

export type TTrainer = {
  trainerId: string;
  imagePreview: string;
  name: string;
  bithDate: string;
  password: string;
  phone: string;
  mail: string;
  telegram: string;
  whatsapp: string;
  specialization: string[];
  education: string[];
  merits: string[];
  workDate: string[];
  workTime: string[];
  fitnessBoxesId: string[];
  price: TPrice;
  readyToWork: boolean;
}
