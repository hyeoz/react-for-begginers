import { Link } from "react-router-dom";
import style from "../Button.module.css";

function Nav() {
  return (
    <div className={style.bgrd}>
      <Link to="/">
        <button className={style.btn}>Main</button>
      </Link>
      <hr />
    </div>
  )
};

export default Nav;