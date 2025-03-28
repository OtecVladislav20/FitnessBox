import { TFitnessBox } from '../types/fitness-box.type.js';
import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';


export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): TFitnessBox[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([boxId, name, imagePreview, idLock, adress, imagesBox, description, location, equipment, visited, score]) => ({
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
      }));
  }
}
