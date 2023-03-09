import classes from "./index.module.css";

function DatePicker({ width, mt }) {
  return (
    <input type='date' className={classes.picker} style={{ width: width, marginTop: mt }} />
  )
}

export default DatePicker