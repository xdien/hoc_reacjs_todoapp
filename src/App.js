import logo from './logo.svg';
import './App.css';
import TodoHeader from "./components/TodoHeader"
import TodoTable from './components/TodoTable';
import TodoSearchFilter from './components/TodoSearchFilter';
import TodoAddTask from './components/TodoAddTask';
import { useRef } from 'react';

function App() {
  const taskUpdateRef = useRef(null);

  return (
    <div className="container">
      <div className='column'>
        <TodoHeader />
        <div className='row'>
          <div className='col-lg-6'>
            <div className='card-body'>
              <TodoSearchFilter />
            </div>
          </div>
          
          <div className='col-md-6'>
            <div className='card-body'>
              <TodoAddTask />
            </div>
          </div>
        </div>
        <TodoTable 
        ref={taskUpdateRef} />
      </div>
    </div>
  );
}

export default App;
