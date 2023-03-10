import classes from "./index.module.css"
import InputMask from "react-input-mask";
import { cn } from "@/utils";
import { useEffect, useState } from "react";

function PhoneInput({ width, mt, placeholder, defaultValue, onChange, hasError }) {

  const [value, setValue] = useState("")

  const handleChange = (e) => {
    const realValue = e.target.value.replace(/\D/g, '');

    setValue(e.target.value);

    if (onChange)
      onChange(realValue);
  }

  useEffect(() => {
    if (defaultValue)
      setValue(defaultValue);
  }, [defaultValue])

  return (
    <InputMask
      className={cn(classes.input, hasError && classes.errorInput)} style={{ width: width, marginTop: mt }}
      placeholder={placeholder}
      mask='+7(999)999-99-99'
      value={value}
      onChange={handleChange}
    />
  )
}

export default PhoneInput;