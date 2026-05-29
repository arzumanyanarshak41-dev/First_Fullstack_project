import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.css";

export function Register() {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BASE_URL;
  async function Sub(e) {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      age: e.target.age.value.trim(),
      password: e.target.password.value.trim(),
    };
    await fetch(url + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    navigate("/");
    e.target.reset();
  }
  return (
    <div className={styles.register}>
      <form onSubmit={Sub}>
        <input type="text" placeholder="name" name="name" />
        <input type="email" placeholder="email" name="email" />
        <input type="number" placeholder="age" name="age" />
        <input type="password" placeholder="password" name="password" />
        <button>Register</button>
        <p>
          Have an Account? <Link to={"/"}>Login</Link>
        </p>
      </form>
    </div>
  );
}
