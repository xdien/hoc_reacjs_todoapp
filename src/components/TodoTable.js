import { Component } from "react";
import ToDoItem from "./TodoItem";
import TodoData from "./TodoMockData";
// import todoData from "./TodoMockData"

class TodoTable extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      items : TodoData
    }
    console.log(TodoData);
    
  }
  
  handleItemTask(index) {
    console.log(this.state.items[index]);
    // this.props.onClick(this.state.todoData[index]);
  }
    render() {
      const elemTasks = this.state.items.map((item,index)=>{
        return <ToDoItem onClick={(index) =>{this.handleItemTask(index)}} key={index} index={index} taskName={item.taskName} level={item.level} ></ToDoItem>
      });
        return (<table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Level</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {elemTasks}
        </tbody>
      </table>);
    }
}
export default TodoTable;