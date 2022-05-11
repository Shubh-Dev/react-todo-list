import React from "react"
import styles from "./TodoItem.module.css"

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

const handleEditing = () => {
  console.log("edit mode activated");
}

function TodoItem(props) {
  const { completed, id, title } = props.todo;
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          Delete
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
          {title}
        </span>
      </div>
    </li>
  )
};

export default TodoItem;