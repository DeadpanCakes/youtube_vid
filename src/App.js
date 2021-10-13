import "./App.css";
import PageHeader from "./Components/PageHeader/PageHeader";
import MainVideo from "./Components/MainVideo/MainVideo";
import Recommendation from "./Components/Recommendation/Recommendation";

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <div className="content">
        <MainVideo />
        <Recommendation />
      </div>
    </div>
  );
}

export default App;
