import classes from "./index.module.css";

function Input({ width, mt }) {
  return (
    <input className={classes.input} style={{ width: width, marginTop: mt }} />
  )
}

export default Input