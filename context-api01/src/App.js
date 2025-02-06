import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <Item name="Apple" price={100000} />
      <Item name="iPhone" price={60000} />
      <Item name="Samsung Galaxy S24 ultra" price={120000} />
      <Cart />
    </div>
  );
}

export default App;
