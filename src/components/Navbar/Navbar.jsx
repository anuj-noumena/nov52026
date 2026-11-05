import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link to="/">⚡ TaskFlow</Link>
      </div>

      <div className={styles.navLinks}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Login
        </NavLink>

        <button className={styles.logoutBtn} onClick={() => navigate("/login")}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
