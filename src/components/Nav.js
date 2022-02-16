import { Link } from "react-router-dom";
import style from "../Button.module.css";

function Nav() {
  return (
    <div className={style.bgrd}>
      <Link to="/">
        <button className={style.btn}>Back to Main Page</button>
      </Link>
    </div>
  );
}

export default Nav;
