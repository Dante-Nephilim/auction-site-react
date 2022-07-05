import './App.css';
import Items from './items';

function App() {
  return (
    <div className="bg-cyan-900">
      <div className="flex justify-center py-6">
        <h1 className="text-6xl  text-white ">Auction Site</h1>;
      </div>
      <Items />
    </div>
  );
}

export default App;
