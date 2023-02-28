// import { useContext } from 'react';
import Card from '../Card/Card';
import './main.css';
import Preloader from '../Preloader/Preloader';

// import { CreateUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  // const currentUser = useContext(CreateUserContext);

  return (
    <>
      <main>
        {props.isLoading ? <Preloader /> : ''}
        <section className='content'>
          {props.cards.map((card) => (
            <>
              <Card card={card} key={card.id} onCardClick={props.onCardClick} />
            </>
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
