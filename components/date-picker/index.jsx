import classes from "./index.module.css";
import { useEffect, useState } from "react";
import { cn } from "@/utils";

function DatePicker({ width, mt, defaultValue, onChange, hasError }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue])

  return (
    <input type='date' className={cn(classes.picker, hasError && classes.pickerError)}
           style={{ width: width, marginTop: mt }} onChange={handleChange} value={value} />
  )
}

export default DatePicker