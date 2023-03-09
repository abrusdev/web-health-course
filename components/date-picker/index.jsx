import classes from "./index.module.css";
import { useState } from "react";

function DatePicker({ width, mt, onChange }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <input type='date' className={classes.picker} style={{ width: width, marginTop: mt }} onChange={handleChange} value={value} />
  )
}

export default DatePicker