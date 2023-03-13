import logo from './logo.svg';
import './App.css';
import { Departments } from './components/departments/Departments';
import { Button } from './components/button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kennsluskráin</h1>
        <Departments title="Nýjustu deilir" />
      </header>
    </div>
  );
}

export default App;
