import './App.css';
import Preloader from './Components/Coman/Preloader';
import Ellos from './Components/Ellos';
import Jackpot from './Components/Jackpot';
import Lanza from './Components/Lanza';
import Marca from './Components/Marca';
import Mas from './Components/Mas';
import Mybacktotop from './Components/Mybacktotop';
import Myfooter from './Components/Myfooter';
import Myheader from './Components/Myheader';
import Nuestra from './Components/Nuestra';
import Ofertas from './Components/Ofertas';
import Por from './Components/Por';
import Razones from './Components/Razones';
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect} from 'react';


function App() {
  useEffect (() => {
    Aos.init({duration:1000,});
  }, [])
  return (
    <div className=" bg-[#00141b]">
      <Myheader/>
      <Nuestra/>
      <Marca/>
      <Jackpot/>
      <Por/>
      <Razones/>
      <Ofertas/>
      <Ellos/>
      <Mas/>
      <Lanza/>
      <Myfooter/>
      <Preloader/>
      <Mybacktotop/>
    </div>
  );
}

export default App;
