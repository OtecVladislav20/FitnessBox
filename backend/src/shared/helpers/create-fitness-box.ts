import { TFitnessBox } from '../types/fitness-box.type.js';


export function createFitnessBox(fitnessBoxData: string): TFitnessBox {
  const [
    name,
    imagePreview,
    idLock,
    adress,
    description,
    imagesBox,
    location,
    equipment,
    visited,
    score
  ] = fitnessBoxData.replace('\n', '').split('\t');

  return {
    name,
    imagePreview,
    idLock,
    adress,
    description,
    imagesBox: imagesBox.split(';'),
    location: location.split(';').map((i) => (Number(i))),
    equipment: equipment.split(';'),
    visited: Number(visited),
    score: Number(score),
  };
}
