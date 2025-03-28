import { TFitnessBox } from '../types/fitness-box.type';


export function createFitnessBox(fitnessBoxData: string): TFitnessBox {
  const [
    boxId,
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
    boxId,
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
