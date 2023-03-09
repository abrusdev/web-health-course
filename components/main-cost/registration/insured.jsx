import Input from "@/components/input";
import DatePicker from "@/components/date-picker";
import { useState } from "react";
import classes from "@/components/main-cost/registration/index.module.css";
import MultiCheckBox from "@/components/check-box/multi";
import PhoneInput from "@/components/input/phone";

function MainCostRegistrationInsured({ classes, onChange }) {

  const [insured, setInsured] = useState({});

  const handleChange = (props) => {
    setInsured({ ...insured, ...props });
    onChange({ ...insured, ...props });
  }

  return (
    <div>
      <div className={classes.withTwoItems} style={{ marginTop: 24 }}>
        <div>
          <p className={classes.label}>ФИО*</p>
          <Input width={524} mt={8} onChange={(value) => handleChange({ full_name: value })} />
        </div>

        <div>
          <p>Дата рождения*</p>
          <DatePicker width={194} mt={8} onChange={(value) => handleChange({ birth_date: value })} />
        </div>
      </div>

      <p className={classes.label} style={{ marginTop: 24 }}>Пол*</p>

      <MultiCheckBox label1='Мужской' label2='Женский'
                     onChange={(value) => handleChange({ gender: value })} />

      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <div>
          <p className={classes.label}>Телефон*</p>
          <PhoneInput width={204} mt={8} placeholder='+7(___)___-__-__'
                 onChange={(value) => handleChange({ phone: value })} />
        </div>

        <div>
          <p className={classes.label}>Email*</p>
          <Input width={358} mt={8}
                 onChange={(value) => handleChange({ email: value })} />
        </div>
      </div>

      <p className={classes.label} style={{ marginTop: 24 }}>Адрес</p>
      <Input width={740} mt={8} onChange={(value) => handleChange({ address: value })} />
    </div>
  )
}

export default MainCostRegistrationInsured