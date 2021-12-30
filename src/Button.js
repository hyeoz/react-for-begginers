import PropTypes from "prop-types";
import style from "./Button.module.css";

function Button({text}) {
  return (<button className={style.btn}>{text}</button>) // global css 스타일을 원하지 않을 때
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;