import { Component } from "react";

class TodoAddTask extends Component{
    constructor(props){
        super(props)
        this.showHidenTask = this.showHidenTask.bind(this);
        this.state = {
            isShowEdit : false,
        }
    }
    showHidenTask() {
        this.setState({isShowEdit : !this.state.isShowEdit})
    }
    render(){
        let elemTaskEdit = null
        if(this.state.isShowEdit){
           elemTaskEdit =  
           <div className="column">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons"/>
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
        }
        return(
            <div className="column">
                <div className="input-group">
                    <a className="btn btn-primary btn-sm " href="#" role="button" onClick={this.showHidenTask}> Add Task</a>
                    {elemTaskEdit}
                </div>
                
            </div>
        );
    }
}
export default TodoAddTask;