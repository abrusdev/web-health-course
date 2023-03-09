import classes from "./index.module.css";
import { useState } from "react";

function TextArea({ width, mt, placeholder }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <textarea className={classes.area} style={{ width: width, marginTop: mt }}
           placeholder={placeholder}
           value={value} onChange={handleChange}
    />
  )
}

export default TextArea