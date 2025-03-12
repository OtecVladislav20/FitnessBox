import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth.tsx/header-auth';

export default function CatalogPage(): JSX.Element {
  return (
    <>
      <HeaderAuth/>
      <main className='catalog'>
        <section>
          <input type="text" placeholder='Поиск'/>
          <button>Избранное</button>
        </section>
        <section className='flex'>
          <div>
            <div className='card-fitnessbox flex'>
              <img src="../img/FitnessBox.png" alt="" className='card-fitnessbox-img'/>
              <div className='card-fitnessbox-text flex'>
                <h2 className='card-fitnessbox-title'>FitnessBox1</h2>
                <p className='card-fitnessbox-p'>Менделеева 11</p>
                <p className='card-fitnessbox-p'>Количество посещений: 568</p>
              </div>
              <div className='card-fitnessbox-btns flex'>
                <button>
                  <img src="../img/Star.svg" alt="" />
                </button>
                <div>
                  <img src="" alt="" />
                  <p className='card-fitnessbox-p'>4/5</p>
                </div>
              </div>
            </div>

            <div className='card-fitnessbox flex'>
              <img src="../img/FitnessBox.png" alt="" className='card-fitnessbox-img'/>
              <div className='card-fitnessbox-text flex'>
                <h2 className='card-fitnessbox-title'>FitnessBox1</h2>
                <p className='card-fitnessbox-p'>Менделеева 11</p>
                <p className='card-fitnessbox-p'>Количество посещений: 568</p>
              </div>
              <div className='card-fitnessbox-btns flex'>
                <button>
                  <img src="../img/Star.svg" alt="" />
                </button>
                <div>
                  <img src="" alt="" />
                  <p className='card-fitnessbox-p'>4/5</p>
                </div>
              </div>
            </div>

            <div className='card-fitnessbox flex'>
              <img src="../img/FitnessBox.png" alt="" className='card-fitnessbox-img'/>
              <div className='card-fitnessbox-text flex'>
                <h2 className='card-fitnessbox-title'>FitnessBox1</h2>
                <p className='card-fitnessbox-p'>Менделеева 11</p>
                <p className='card-fitnessbox-p'>Количество посещений: 568</p>
              </div>
              <div className='card-fitnessbox-btns flex'>
                <button>
                  <img src="../img/Star.svg" alt="" />
                </button>
                <div>
                  <img src="" alt="" />
                  <p className='card-fitnessbox-p'>4/5</p>
                </div>
              </div>
            </div>
          </div>
          <div>ЯНДЕКС КАРТА</div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
