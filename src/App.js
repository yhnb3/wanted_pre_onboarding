import "./App.css";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";

const dropdownList = [
  "BTCUSD.PERP",
  "ETHUSD.PERP",
  "BCHUSD.PERP",
  "LTCUSD.PERP",
  "XRPUSD.PERP",
  "1000SHIBUSD.PERP",
];
function App() {
  return (
    <div className="App">
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown items={dropdownList} initialTarget="All Symbols" />
    </div>
  );
}

export default App;
