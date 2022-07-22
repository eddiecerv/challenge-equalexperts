import './App.css';
import Header from './shared/core/Header';
import Main from './components/Main';
import Footer from './shared/core/Footer';

function App() {
  return (
    <div className="app__bg">
      <Header />
      <div className='container'>
        <div id='calculator__body'>
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
