import classes from "./index.module.css";
import { useState } from "react";
import { cn } from "@/utils";

function Input({ width, mt, placeholder, hasError, onChange }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (onChange)
      onChange(e.target.value)
    setValue(e.target.value)
  }

  return (
    <input className={cn(classes.input, hasError && classes.errorInput)} style={{ width: width, marginTop: mt }}
           placeholder={placeholder}
           value={value} onChange={handleChange}
    />
  )
}

export default Input