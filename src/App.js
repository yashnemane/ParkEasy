import './assests/styles/index.css';
import './assests/styles/App.css';
import Header from './components/Header.js';
import Homepage from './pages/Homepage.js';
import NewsLetter from './components/NewsLetter.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Homepage/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
