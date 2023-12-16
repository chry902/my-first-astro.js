import { useState } from "preact/hooks";
import styles from "../../menu.module.css";
const Menu = ({ path }) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div class="menu_wrapper">
      <ul>
        <li>
          <a href="/" class={path == "/" && styles.selected}>
            <h3>Home</h3>
          </a>
        </li>
        <li>
          <a href="/about" class={path == "/about" && styles.selected}>
            <h3>About</h3>
          </a>
        </li>
        <li>
          <a href="/products" class={path == "/products" && styles.selected}>
            <h3>Products</h3>
          </a>
        </li>
        {!isLogged ? (
          <li onClick={() => setIsLogged(!isLogged)}>
            <button>LogOut</button>
          </li>
        ) : (
          <li>
            <button onClick={() => setIsLogged(!isLogged)}>Login</button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Menu;
