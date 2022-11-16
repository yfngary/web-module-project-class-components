import React from 'react'

export default class Todo extends React.Component {
  handleClick = (props) => {
    this.props.handleToggle(this.props.todos.id);
  }
  render(props) {
    return (
        <li onClick={this.handleClick}>{this.props.todos.name} { this.props.todos.completed?<span>- Completed</span>:<span> </span> }</li>
    )
  }
}
