import classes from "./index.module.css";
import { useState } from "react";

function Input({ width, mt, placeholder, onChange }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (onChange)
      onChange(e.target.value)
    setValue(e.target.value)
  }

  return (
    <input className={classes.input} style={{ width: width, marginTop: mt }}
           placeholder={placeholder}
           value={value} onChange={handleChange}
    />
  )
}

export default Input