import React from 'react'

export default class Todo extends React.Component {
  render(props) {
    return (
        <li>{this.props.todos.name} { this.props.todos.completed?<span>- Completed</span>:<span> </span> }</li>
    )
  }
}
