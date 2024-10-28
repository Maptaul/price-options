import "./App.css";
import LineChart from "./Component/LineChart/LineChart";
// import Navbar from "./Component/navbar/navbar";
import NavbarSelf from "./Component/navbarself/NavbarSelf";
import PriceOptions from "./Component/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* navbar  */}
      <NavbarSelf />
      <h1 className="bg-red-50 text-7xl">Vite + React</h1>
      {/* <Navbar /> */}
      <PriceOptions />
      <LineChart />
    </>
  );
}

export default App;
