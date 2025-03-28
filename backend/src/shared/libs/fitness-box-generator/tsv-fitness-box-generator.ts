import dayjs from 'dayjs';
import { FitnessBoxGenerator } from './fitness-box-generator.interface.js';
import { getRandomItems, getRandomItem, generateRandomValue } from '../../helpers/common.js';
import { MockServerData } from '../../types/mock-server-data.type.js';

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVFitnessBoxGenerator implements FitnessBoxGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const categories = getRandomItems<string>(this.mockData.categories).join(';');
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const photo = getRandomItem<string>(this.mockData.offerImages);
    const type = getRandomItem<string>(this.mockData.titles);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const author = getRandomItem(this.mockData.users);
    const email = getRandomItem(this.mockData.emails);
    const avatar = getRandomItem(this.mockData.avatars);

    const createdDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    const [firstname, lastname] = author.split(' ');

    return [
      title, description, createdDate,
      photo, type, price, categories,
      firstname, lastname, email, avatar,
    ].join('\t');
  }
}
