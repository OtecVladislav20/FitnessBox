import { fitnessBoxes } from '../../../utils/fitness-boxes';
import GeocodeMap from '../../geocode-map.tsx/geocode-map';

export default function SessionBlockTrainer(): JSX.Element {
  return (
    <div className='flex session-block-trainer'>
      <div className='session-block-info-wrapper'>
        <div className='flex session-block-info'>
          <div className="session-block-text-wrapper">
            <p className="session-block-text">Маслаков Владислав Денисович</p>
            <p className="session-block-text">8-906-800-68-08</p>
            <p className="session-block-text">Осталось еще: 3 тренировки</p>
          </div>
          <div className="session-block-text-wrapper">
            <p className="session-block-text">FitnessBox 1</p>
            <p className="session-block-text">ул.Менделеева 11</p>
            <p className="session-block-text">26.04.2025  14:00</p>
          </div>
        </div>
        <div className="flex">
          <button className="session-block-btn">Отказать</button>
          <button className="session-block-btn session-block-btn--active">Одобрить</button>
        </div>
      </div>
      <div className='catalog-map-trainer-block'>
        <GeocodeMap fitnessBoxes={fitnessBoxes}/>
      </div>
    </div>
  );
}

