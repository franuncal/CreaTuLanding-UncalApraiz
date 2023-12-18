import NavBar from "./components/NavBAr/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./App.css"

function App() {
  return (
    <>
      <div>
        <NavBar /> 
        <ItemListContainer greeting='Bienvenidos!'/>
      </div>
    </> 
  );
}

export default App;
