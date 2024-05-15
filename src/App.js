import './App.css';

import DropDown from "./DropDown";

const initialOptions = [
  { value: "chocolate", label: "Chocolate", checked: false },
  { value: "strawberry", label: "Strawberry", checked: false },
  { value: "vanilla", label: "Vanilla", checked: false },
];

function App() {
  return (
    <div className="App">
      <DropDown initialOptions={initialOptions} single/>
    </div>
  );
}

export default App;
