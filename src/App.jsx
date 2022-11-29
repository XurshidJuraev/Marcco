import './App.css';
import Header from './Components/header/header';
import Hero from './Components/hero/hero';
import Hero2 from './Components/hero2/hero2';
import Podxod from './Components/podxod/podxod';
import Quiz from './Components/quiz/quiz';
import Clients from './Components/clients/clients';
import Skidka from './Components/skidka/skidka';
import Keys from './Components/keys/keys';
import Spektr from './Components/spektr/spektr';
import Mark from './Components/mark&co/mark';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Hero2 />
      <Podxod />
      <Quiz />
      <Clients />
      <Skidka />
      <Keys />
      <Spektr />
      <Mark />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
