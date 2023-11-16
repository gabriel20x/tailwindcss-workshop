import CardContainer from "./components/CardContainer";
import {useState} from "react";
import {SHOES} from "./data/mock_data";
import Presentation from "./components/Presentation";
import Description from "./components/Description";
import ButtonsContainer from "./components/ButtonsContainer";
import SizeSelector from "./components/SizeSelector";
import AddButton from "./components/AddButton";

function App() {
  const [selectedShoe, setShoe] = useState(SHOES['white'])

  const selectShoe = (shoeKey) => {
    setShoe(SHOES[shoeKey])
  }

  return (
    <main className={'main-container'}>
      <CardContainer>
        <Presentation photo={selectedShoe.photo} color={selectedShoe.primaryColor}/>
        <Description name={selectedShoe.name}/>
        <ButtonsContainer selectShoe={selectShoe} actualShoe={selectedShoe}/>
        <SizeSelector/>
        <AddButton/>
      </CardContainer>
    </main>
  );
}

export default App;
