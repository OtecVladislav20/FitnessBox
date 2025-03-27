import { useNavigate } from 'react-router-dom';

type TFitnessBoxCard = {
  boxId: string;
  boxName: string;
  boxAdress: string;
  boxScore: number;
  boxVisited: number;
}

export default function FitnessBoxCard({boxId, boxName, boxAdress, boxScore, boxVisited}: TFitnessBoxCard) {
  const navigate = useNavigate();
  return(
    <div className='card-fitnessbox flex' onClick={() => navigate(`/catalog/${boxId}`)}>
      <img src="../img/FitnessBox.png" alt="" className='card-fitnessbox-img'/>
      <div className='card-fitnessbox-text flex'>
        <h2 className='card-fitnessbox-title'>{boxName}</h2>
        <p className='card-fitnessbox-p'>{boxAdress}</p>
        <p className='card-fitnessbox-p'>Количество посещений: {boxVisited}</p>
      </div>
      <div className='card-fitnessbox-btns flex'>
        <button>
          <img src="../img/Star.svg" alt="" />
        </button>
        <div>
          <img src="" alt="" />
          <p className='card-fitnessbox-p'>{boxScore}</p>
        </div>
      </div>
    </div>
  );
}
