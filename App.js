import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Login from './component/Login';
import EmployeeDashboard from './component/EmployeeDashboard';
import Homepage from './component/Homepage';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Homepage/>

      </div>
    );
  }
}

export default App;