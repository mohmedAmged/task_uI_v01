import logo from './logo.svg';
import './App.css';
import MyNav from './components/myNav/MyNav';
import MyHeroSec from './components/heroSection/MyHeroSec';
import { useState } from 'react';
import NumberSec from './components/numbersSec/NumberSec';
import DeleverySec from './components/deleviringSec/DeleverySec';
import TalentedSec from './components/talentedSec/TalentedSec';
import PortofolioSec from './components/portofolioSec/PortofolioSec';
import PartenrSec from './components/partenerSec/PartenrSec';
import HostingSec from './components/hostingSec/HostingSec';
import SucessSec from './components/sucessSec/SucessSec';
import TeamSec from './components/teamSec/TeamSec';
import MapSec from './components/mapSec/MapSec';

function App() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((prevShow) => !prevShow);
  return (
    <>
      <MyNav handleToggle={handleToggle} show={show}/>
      <MyHeroSec show={show} setShow={setShow} />
      <NumberSec/>
      <DeleverySec/>
      <TalentedSec/>
      <PortofolioSec/>
      <PartenrSec/>
      <HostingSec/>
      <SucessSec/>
      <TeamSec/>
      <MapSec/>
    </>
  );
}

export default App;
