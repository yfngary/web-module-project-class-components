import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render(props) {
    return (
      <ul>
          {
            this.props.todos.map(todo => {
              return (<Todo key={todo.id} handleToggle={this.props.handleToggle} todos={todo}/>)
            })
          }
        </ul>
    )
  }
}
