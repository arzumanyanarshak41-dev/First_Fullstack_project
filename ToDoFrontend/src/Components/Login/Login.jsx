import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
export function Login() {
  const url = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  async function Sub(e) {
    e.preventDefault();
    const logedUser = {
      email: e.target.email.value.trim(),
      password: e.target.password.value.trim(),
    };
    const response = await fetch(url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logedUser),
    });
    const result = await response.json();
    if (response.ok) {
      const response = await fetch(url + "/users/" + `${result._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isOnline: true }),
      });
      navigate(`/home/${result._id}`);
    }
    e.target.reset();
  }
  return (
    <div className={styles.login}>
      <form onSubmit={Sub}>
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        <p>
          Dont have an Account? <Link to={"/register"}>Register</Link>
        </p>
      </form>
    </div>
  );
}
