import './App.css';
import {Header} from './component';
import MainComponent from './MainComponent';
  import {ContextProvider} from './component/Context/CreateContext';

function App() {
  return (
    <div className="App">
      <ContextProvider>  
      <Header />
      <MainComponent/>
    </ContextProvider>
    </div>
  );
}

export default App;
