import React from "react"

function TodoItem(props) {
  return <li><input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps()} />{props.todo.title}</li>
}

export default TodoItem;