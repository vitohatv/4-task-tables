import LineChart from "./UI/Graphics/3/graphic";
import { data } from './UI/Graphics/3/data';

function App() {
  return (
    <div className="App">
      <LineChart data={data} />
    </div>
  );
}
export default App;