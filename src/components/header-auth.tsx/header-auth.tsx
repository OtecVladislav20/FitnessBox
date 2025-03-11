export default function HeaderAuth(): JSX.Element {
  return (
    <header className="header flex">
      <a href="#">
        <img src="../img/logoFitnessBox.svg" alt="FitnessBox"/>
      </a>
      <nav className='flex'>
        <a href='/' className='nav-link'>Начать заниматься</a>
        <a href='/' className='nav-link'>Подписка</a>
        <a href='/' className='nav-link'>Контакты</a>
        <a href='/' className='nav-link'>Вакансии</a>
      </nav>
    </header>
  );
}
