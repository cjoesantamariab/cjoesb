import './App.css';
import BackGround from './components/BackGround';
import InfoCard from './components/InfoCard';
import DisableScroll from './components/DisableScroll';
import Effects from './components/Effects';

function App() {
  return (
    <div className="App">
      <DisableScroll />
      <Effects />
      <BackGround />
      <InfoCard />
    </div>
  );
}

export default App;
