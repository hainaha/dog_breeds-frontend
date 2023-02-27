import { useState, useEffect } from 'react';
import './App.css';
import api from '../../utils/TheDogApi';
import Header from '../Header/Header';
import MainImage from '../MainImage/MainImage';
import Description from '../Description/Description';
import Footer from '../Footer/Footer';

function App() {
  const [cards, setCards] = useState([]);
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    api.getInitialCards().then((initialCards) => {
      setCards(initialCards);
    });
    api.getBreeds().then((allBreeds) => {
      setBreeds(allBreeds);
    });
    api.getBreedImage(2).then((xxx) => {
      console.log(xxx.url);
    });
  }, []);
  console.log(cards);
  console.log(breeds);

  return (
    <div className='App'>
      <div className='App'>
        <Header />
        <MainImage />
        <Description />

        {/* <div className=''></div>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/main' element={<Main />} />
        </Routes> */}
        <Footer />
      </div>
    </div>
  );

  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className='App-logo' alt='logo' />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className='App-link'
  //         href='https://reactjs.org'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
