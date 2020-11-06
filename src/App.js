import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import TinderCards from './Component/TinderCards'
import SideButton from './Component/SideButton'
import Drawer from './Component/Drawer'

function App() {
  return (
    <div className="App">

    {/*header*/ }
{<Header/>}
    {/*Tinder card*/}
    <TinderCards/>
    {/*Swipe button*/}
    <SideButton/>
    </div>
  );
}

export default App;
