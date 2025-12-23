import { useDispatch, useSelector } from "react-redux";
import "./ToDoList.css";
import { toggleToDo } from "../../redux/actions/todoAction";

function ToDoList() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(toggleToDo(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
