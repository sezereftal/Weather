import "./App.css";
import { WeatherProvider } from "./assets/context/Context";
import AllProject from "./components/AllProject";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <AllProject />
      </WeatherProvider>
    </div>
  );
}

export default App;
