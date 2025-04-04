import { getErrorMessage } from '../../shared/helpers/common.js';
import { createFitnessBox } from '../../shared/helpers/create-fitness-box.js';
import { getMongoURI } from '../../shared/helpers/database.js';
import { DatabaseClient } from '../../shared/libs/database-client/database-client.interface.js';
import { MongoDatabaseClient } from '../../shared/libs/database-client/mongo.database-client.js';
import { TSVFileReader } from '../../shared/libs/file-reader/tsv-file-reader.js';
import { Logger } from '../../shared/libs/logger/logger.interface.js';
import { PinoLogger } from '../../shared/libs/logger/pino.logger.js';
import { DefaultFitnessBoxService } from '../../shared/modules/fitness-box/default-fitness-box.service.js';
import { FitnessBoxModel } from '../../shared/modules/fitness-box/fitness-box.entity.js';
import { FitnessBoxService } from '../../shared/modules/fitness-box/fitness-box.interface.js';
import { TFitnessBox } from '../../shared/types/fitness-box.type.js';
import { DEFAULT_DB_PORT } from './command.constant.js';
import { Command } from './command.interface.js';


export class ImportCommand implements Command {
  private fitnessBoxService: FitnessBoxService;
  private databaseClient: DatabaseClient;
  private logger: Logger;

  constructor() {
    this.onImportedLine = this.onImportedLine.bind(this);
    this.onCompleteImport = this.onCompleteImport.bind(this);

    this.logger = new PinoLogger();
    this.fitnessBoxService = new DefaultFitnessBoxService(this.logger, FitnessBoxModel);
    this.databaseClient = new MongoDatabaseClient(this.logger);
  }


  public getName(): string {
    return '--import';
  }

  private async onImportedLine(line: string, resolve: () => void) {
    const offer = createFitnessBox(line);
    await this.saveFitnessBox(offer);
    resolve();
  }

  private onCompleteImport(count: number) {
    console.info(`${count} rows imported.`);
    this.databaseClient.disconnect();
  }

  private async saveFitnessBox(fitnessBox: TFitnessBox) {
    await this.fitnessBoxService.create({
      categories,
      userId: user.id,
      title: offer.title,
      description: offer.description,
      image: offer.image,
      postDate: offer.postDate,
      price: offer.price,
      type: offer.type,
    });

  }

  public async execute(filename: string, login: string, password: string, host: string, dbname: string): Promise<void> {
    const uri = getMongoURI(login, password, host, DEFAULT_DB_PORT, dbname);

    await this.databaseClient.connect(uri);

    const fileReader = new TSVFileReader(filename.trim());

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);

    try {
      await fileReader.read();
    } catch (error) {
      console.error(`Can't import data from file: ${filename}`);
      console.error(getErrorMessage(error));
    }
  }
}
