import classes from "./index.module.css"
import InputMask from "react-input-mask";
import { cn } from "@/utils";

function PhoneInput({ width, mt, placeholder, onChange, hasError }) {
  const handleChange = (e) => {
    const realValue = e.target.value.replace(/\D/g, '');

    if (onChange)
      onChange(realValue);
  }

  return (
    <InputMask
      className={cn(classes.input, hasError && classes.errorInput)} style={{ width: width, marginTop: mt }}
      placeholder={placeholder}
      mask='+7(999)999-99-99'
      onChange={handleChange}
    />
  )
}

export default PhoneInput;