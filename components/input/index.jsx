import classes from "./index.module.css";
import { useEffect, useState } from "react";
import { cn } from "@/utils";

function Input({ width, mt, placeholder, hasError, defaultValue = "", onChange }) {

  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    if (onChange)
      onChange(e.target.value)
    setValue(e.target.value)
  }

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue])

  return (
    <input className={cn(classes.input, hasError && classes.errorInput)} style={{ width: width, marginTop: mt }}
           placeholder={placeholder}
           value={value} onChange={handleChange}
    />
  )
}

export default Input