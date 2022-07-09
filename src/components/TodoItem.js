import React, { Component } from "react";

class ToDoItem extends Component{
    constructor(props){
        super(props)
        this.handleClickTaskItem = this.handleClickTaskItem.bind(this);
        this.indexRef = React.createRef();
    }
    formatText(level){
        if(level === "High"){
            return <p class="bg-danger text-white">{level}</p>;
        }
        if(level === "Medium"){
            return <p class="bg-warning text-white">{level}</p>;
        }
        if(level === "Small"){
            return <p class="bg-success text-white">{level}</p>;
        }
        return null;
    }
    handleClickTaskItem (){
        // console.log(this.indexRef.current.text);
        this.props.onClick(this.indexRef.current.text)
    } 
    render() {
        return(
        <tr>
            <th scope="row" ><a ref={this.indexRef}>{this.props.index}</a></th>
            <td>{this.props.taskName}</td>
            <td>
                {this.formatText(this.props.level)}
            </td>
            <td>
                <div className="column">
                    <a className="btn btn-primary btn-sm " href="#" role="button" onClick={this.handleClickTaskItem}>Edit</a>
                    <a className="btn btn-secondary btn-sm " href="#" role="button">Delete</a>
                </div>
            </td>
        </tr>
        );
    }
}
export default ToDoItem;