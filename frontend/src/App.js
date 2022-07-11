import Analytics from './Analytics';
import './App.css';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Analytics/>
      
    </div>
  );
}

export default App;
