import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './components/NavbarBoostrap';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
        <NavbarBoostrap/>
        <ItemListContainer greetings="Item List Container"/>
{/*         <Navbar />
        <Body />
        <Body />
 */}
        
    </div>
  );
}

export default App;
