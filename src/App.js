import './App.css';
import BackGround from './components/BackGrounds';
import InfoCard from './components/InfoCard';
import DisableScroll from './components/DisableScroll';

function App() {
  return (
    <div className="App">
      <DisableScroll />
      <BackGround />
      <InfoCard />
    </div>
  );
}

export default App;
