import classes from "./multi.module.css";
import CheckBox from "@/components/check-box/index";
import { useState } from "react";

function MultiCheckBox({ label1 = "", label2 = "", onChange }) {
  const [value, setValue] = useState(-1);

  const handleChange = (value) => {
    setValue(value)

    if (onChange) onChange(value)
  }

  return (
    <div className={classes.content}>
      <div className={classes.innerContent}>
        <CheckBox value={value === 0} onChange={() => handleChange(0)} />
        <p>{label1}</p>
      </div>

      <div className={classes.innerContent}>
        <CheckBox value={value === 1} onChange={() => handleChange(1)} />
        <p>{label2}</p>
      </div>
    </div>
  )
}

export default MultiCheckBox;