
import { Provider } from 'react-redux';
import './App.css';
import store from './components/store';
import CounterContainer from './components/CounterContainer';

function App() {
  return (
    <div className="App">

      <Provider store={store}>
       <CounterContainer/>
      </Provider>
      
    </div>
  );
}

export default App;
