import { useAppDispatch } from '../../../hooks/hooks';
import { fitnessBoxes } from '../../../utils/fitness-boxes';
import GeocodeMap from '../../geocode-map.tsx/geocode-map';
import { patchSessionAction } from '../../../store/api-actions';


type TSessionBlockTrainer = {
  id: string;
  userId: string;
  fitnessBoxId: string;
  trainerId?: string;
  ptCount: number;
  date: string;
  hour: string;
}

export default function SessionBlockTrainer({id, userId, fitnessBoxId, trainerId, ptCount, date, hour}: TSessionBlockTrainer): JSX.Element {
  const dispatch = useAppDispatch();

  const handleAcceptWorkout = (accept: boolean, trainer?: string) => {
    const sessionData = {
      id: id,
      acceptWorkout: accept,
      trainerId: trainer,
    };
    dispatch(patchSessionAction(sessionData));
  };

  return (
    <div className='flex session-block-trainer'>
      <div className='session-block-info-wrapper'>
        <div className='flex session-block-info'>
          <div className="session-block-text-wrapper">
            <p className="session-block-text">{userId[name]}</p>
            <p className="session-block-text">фываывфаывфа</p>
            <p className="session-block-text">Осталось еще: {ptCount} тренировки</p>
          </div>
          <div className="session-block-text-wrapper">
            <p className="session-block-text">{fitnessBoxId[id]}</p>
            <p className="session-block-text">ыфваыфваыф</p>
            <p className="session-block-text">{date}  {hour}</p>
          </div>
        </div>
        <div className="flex">
          <button className="session-block-btn" onClick={() => handleAcceptWorkout(false, '0')}>Отказать</button>
          <button className="session-block-btn session-block-btn--active" onClick={() => handleAcceptWorkout(true, trainerId)}>Одобрить</button>
        </div>
      </div>
      <div className='catalog-map-trainer-block'>
        {/* <GeocodeMap fitnessBoxes={fitnessBoxes}/> */}
      </div>
    </div>
  );
}

