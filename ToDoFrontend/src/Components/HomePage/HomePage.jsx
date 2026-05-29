import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./homePage.module.css";
import { useEffect, useMemo, useState } from "react";
import drop from "../../assets/6861362.png";
import edit from "../../assets/editing.png";
import done from "../../assets/done.png";
export function HomePage() {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [editingId, setEditingId] = useState(null);
  const url = import.meta.env.VITE_BASE_URL;
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      let furl = `${url}/users/${id}`;
      const response = await fetch(furl);
      const result = await response.json();
      setUser(result);
    };
    const getTodos = async () => {
      let furl = `${url}/todos?userId=${id}`;
      const response = await fetch(furl);
      const result = await response.json();
      setTodos(result);
    };
    getUser();
    getTodos();
  }, [id, url]);
  async function logout(){
    const response = await fetch(url + "/users/" + `${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isOnline: false }),
      });
  }
  async function Sub(e) {
    e.preventDefault();
    if (e.target.text.value.trim() == "") {
      return;
    }
    const newTodo = {
      text: e.target.text.value.trim(),
      userId: id,
    };
    const response = await fetch(url + "/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    if (response.ok) {
      setTodos((prev) => [newTodo, ...prev]);
    }
    e.target.reset();
  }
  async function change(e) {
    e.preventDefault();
    const text = e.target.text.value.trim();
    const response = await fetch(`${url}/todos/${editingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    });

    if (response.ok) {
      setTodos((prev) =>
        prev.map((t) => (t._id === editingId ? { ...t, text } : t)),
      );

      setEditingId(null);
    }
  }
  async function deleter(todoId) {
    const response = await fetch(`${url}/todos/${todoId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setTodos((prev) => prev.filter((t) => t._id !== todoId));
    }
  }
  async function isDone(todoId) {
    const todo = todos.find((t) => t._id === todoId);

    const response = await fetch(`${url}/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !todo.isDone }),
    });

    if (response.ok) {
      setTodos((prev) =>
        prev.map((t) => (t._id === todoId ? { ...t, isDone: !t.isDone } : t)),
      );
    }
  }
  return (
    <div className={styles.home}>
      <nav>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <Link to={"/"} onClick={logout}>LogOut</Link>
      </nav>
      <div className={styles.todo}>
        <h1>TODO list</h1>
        <span>You don’t need to remember it, just keep writing it down.</span>
        <form onSubmit={Sub}>
          <input type="text" placeholder="Todo..." name="text" />
          <button>+</button>
        </form>
        <ul>
          {todos.map((el) =>
            editingId !== el._id ? (
              <li key={el._id} className={el.isDone ? styles.isdoneForLi : ""}>
                <img src={done} onClick={() => isDone(el._id)} />
                <p className={el.isDone ? styles.isdone : ""}>{el.text}</p>
                <img src={edit} onClick={() => setEditingId(el._id)} />
                <img src={drop} onClick={() => deleter(el._id)} />
              </li>
            ) : (
              <form onSubmit={change} className={styles.editForm}>
                <input type="text" defaultValue={el.text} name="text" />
                <button>Change</button>
                <button type="button" onClick={() => setEditingId(null)}>
                  Cancel
                </button>
              </form>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
