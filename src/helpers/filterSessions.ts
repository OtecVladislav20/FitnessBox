import moment from 'moment';
import { TSessions } from '../utils/sessions';

export const FUTURE_FLAG = 'future';
export const CURRENT_FLAG = 'current';
export const PAST_FLAG = 'past';

export function filterSessions(array: TSessions[], flag: string) {
  const nowDate = moment();
  let newArray:TSessions[] = [];
  switch (flag) {
    case 'future':
      newArray = array.filter((i) => {
        if (parseFloat(i.time.date) > parseFloat(nowDate.format('MM.DD'))) {
          return true;
        } else if (parseFloat(i.time.date) === parseFloat(nowDate.format('MM.DD'))) {
          if (Number(i.time.hour) > Number(nowDate.format('HH'))) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
      return newArray;
    case 'current':
      newArray = array.filter((i) => {
        if (parseFloat(i.time.date) === parseFloat(nowDate.format('MM.DD')) && Number(i.time.hour) === Number(nowDate.format('HH'))) {
          return true;
        } else {
          return false;
        }
      });
      return newArray;
    case 'past':
      newArray = array.filter((i) => {
        if (parseFloat(i.time.date) < parseFloat(nowDate.format('MM.DD'))) {
          return true;
        } else if (parseFloat(i.time.date) === parseFloat(nowDate.format('MM.DD'))) {
          if (Number(i.time.hour) < Number(nowDate.format('HH'))) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
      return newArray;
  }
}
