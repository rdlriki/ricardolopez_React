import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './components/NavbarBoostrap';


function App() {
  return (
    <div>
        <NavbarBoostrap/>
        <Navbar />
        <Body />
        <Body />
    </div>
  );
}

export default App;
