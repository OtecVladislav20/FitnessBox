import { getErrorMessage } from '../../shared/helpers/common.js';
import { TSVFitnessBoxGenerator } from '../../shared/libs/fitness-box-generator/tsv-fitness-box-generator.js';
import { MockServerData } from '../../shared/types/mock-server-data.type.js';
import { Command } from './command.interface.js';
import { got } from 'got';


export class GenerateCommand implements Command {
  private initialData: MockServerData;

  private async load(url: string) {
    try {
      this.initialData = await got.get(url).json();
    } catch {
      throw new Error(`Can't load data from ${url}`);
    }
  }

  private async write(filepath: string, fitnessBoxCount: number) {
    const tsvFitnessBoxGenerator = new TSVFitnessBoxGenerator(this.initialData);
    const tsvFileWriter = new TSVFileWriter(filepath);

    for (let i = 0; i < fitnessBoxCount; i++) {
      await tsvFileWriter.write(tsvFitnessBoxGenerator.generate());
    }
  }

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const fitnessBoxCount = Number.parseInt(count, 10);

    try {
      await this.load(url);
      await this.write(filepath, fitnessBoxCount);
      console.info(`File ${filepath} was created!`);
    } catch (error: unknown) {
      console.error('Can\'t generate data');
      console.error(getErrorMessage(error));
    }
  }
}
