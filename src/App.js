import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Accsum } from './components/Accsum';
import { Transaction } from './components/Transaction';
import { Add } from './components/Add';
import { Globalprovider } from './context/Globalstate';

function App() {
  return (
    <Globalprovider>
      <Header />
        <div className='container' >
          <Balance />
          <Accsum />
          <Transaction />
          <Add />
        </div>
        </Globalprovider>
  );
}

export default App;
