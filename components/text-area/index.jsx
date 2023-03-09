import classes from "./index.module.css";
import { useState } from "react";
import { cn } from "@/utils";

function TextArea({ width, mt, placeholder, onChange, hasError }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (onChange)
      onChange(e.target.value)
    setValue(e.target.value)
  }

  return (
    <textarea className={cn(classes.area, hasError && classes.areaError)} style={{ width: width, marginTop: mt }}
           placeholder={placeholder}
           value={value} onChange={handleChange}
    />
  )
}

export default TextArea