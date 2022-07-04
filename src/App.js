import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './components/NavBarBooster/NavbarBoostrap';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContailner';

function App() {
  return (
    <div>
        <NavbarBoostrap/>  
        <ItemDetailContainer />
        <ItemListContainer greetings="Elija nuestros productos"/> 
    </div>
  );
}

export default App;
