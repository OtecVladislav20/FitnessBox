import { useNavigate } from 'react-router-dom';

type TFitnessBoxCard = {
  id: string;
  boxName: string;
  boxAdress: string;
  boxScore: number;
  boxVisited: number;
}

export default function FitnessBoxCard({id, boxName, boxAdress, boxScore, boxVisited}: TFitnessBoxCard) {
  const navigate = useNavigate();
  return(
    <div className='card-fitnessbox flex' onClick={() => navigate(`/catalog/${id}`)}>
      <img src="../img/FitnessBox.png" alt="" className='card-fitnessbox-img'/>
      <div className='card-fitnessbox-text flex'>
        <h2 className='card-fitnessbox-title'>{boxName}</h2>
        <p className='card-fitnessbox-p'>{boxAdress}</p>
        <p className='card-fitnessbox-p'>Количество посещений: {boxVisited}</p>
      </div>
      <div className='card-fitnessbox-btns flex'>
        <button className='btn-reset'>
          <img src="../img/heart-def.svg" alt="" />
        </button>
        <div className='flex'>
          <img src="../img/white-star.svg" alt="" className='star-score'/>
          <p className='card-fitnessbox-p'>{boxScore}</p>
        </div>
      </div>
    </div>
  );
}
