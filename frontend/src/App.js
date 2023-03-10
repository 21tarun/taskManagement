
import './App.css';
import {Routes,Route} from 'react-router-dom'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Tasks />}/>
        <Route path='/add' element={<AddTask />}/>
      </Routes>
    </div>
  );
}

export default App;
