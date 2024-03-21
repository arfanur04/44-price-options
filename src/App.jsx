import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
	return (
		<>
			{/* <DaisyNav></DaisyNav> */}
			<NavBar></NavBar>
			{/* <h1 className="text-7xl">Vite + React</h1> */}
			<PriceOptions></PriceOptions>
			<LineChart></LineChart>
			<Phones></Phones>
		</>
	);
}

export default App;
