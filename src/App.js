import './assets/css/index.scss';
import Header from './components/header';
import FullBannerDesktop from "./components/fullbannerdesktop";
import FullBannerMobile from "./components/fullbannermobile";
import Regua from "./components/regua";
import Marcas from "./components/marcas";
import Prateleira from "./components/prateleira";
import Seo from "./components/seo";
import Footer from './components/footer';
import Lightbox from './components/lightbox';

function App() {
  return (
    <div className="App">
      <Header/>
      <FullBannerDesktop/>
      <FullBannerMobile/>
      <Regua/>
      <Marcas/>
      <Prateleira/>
      <Seo/>
      <Footer/>
      <Lightbox/>
    </div>
  );
}

export default App;
