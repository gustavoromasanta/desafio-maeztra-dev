import './assets/css/index.scss';
import Header from './components/header';
import FullBanner from "./components/fullbanner";
import Regua from "./components/regua";
import Marcas from "./components/marcas";
import Prateleira from "./components/prateleira";
import Seo from "./components/seo";
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <FullBanner/>
      <Regua/>
      <Marcas/>
      <Prateleira/>
      <Seo/>
      <Footer/>
    </div>
  );
}

export default App;
