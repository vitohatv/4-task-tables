import LineChart from "./UI/Graphics/3/graphic";
import { data } from './UI/Graphics/3/data';
import { optionsValues } from './UI/Graphics/3/value'

function App() {
  return (
    <div className="App">
      <LineChart data={data} optionsValues={optionsValues}/>
    </div>
  );
}
export default App;