import './App.css';
import { Department } from './components/departments/Department';
// import { Departments } from './components/departments/Departments';
// import { DepartmentForm } from './components/departments/DepartmentForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kennsluskráin</h1>
        <Department slug="hagfraedideild" />
        <Department slug="xxx" />
        {/*
        <Departments title="Nýjustu deilir" />
        <DepartmentForm />
        */}
      </header>
    </div>
  );
}

export default App;
