import './App.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
    <NavBar logo="Mi Tienda"/>
    <ItemListContainer greeting="Bienvenidos"/>
    </>
  );
}

export default App;
