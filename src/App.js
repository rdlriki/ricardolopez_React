import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './components/NavBarBooster/NavbarBoostrap';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
        <NavbarBoostrap/>
        <ItemListContainer greetings="Elija nuestros productos"/>
    </div>
  );
}

export default App;
