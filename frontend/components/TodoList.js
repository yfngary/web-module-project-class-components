import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render(props) {
    return (
      <ul>
          {
            this.props.todos.map(todo => {
              return (<Todo todos={todo}/>)
            })
          }
        </ul>
    )
  }
}
