import Input from "@/components/input";
import DatePicker from "@/components/date-picker";
import { useState } from "react";

function MainCostRegistrationInsured({ classes, onChange }) {

  const [insured, setInsured] = useState({});

  const handleChange = (props) => {
    setInsured({ ...insured, ...props });
    onChange({ ...insured, ...props });
  }

  return (
    <>
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

      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <div>
          <p className={classes.label}>Телефон*</p>
          <Input width={184} mt={8} placeholder='+7(___)___-__-__'
                 onChange={(value) => handleChange({ phone: value })} />
        </div>

        <div>
          <p className={classes.label}>Email*</p>
          <Input width={378} mt={8}
                 onChange={(value) => handleChange({ email: value })} />
        </div>
      </div>

      <p className={classes.label} style={{ marginTop: 24 }}>Дата начала действия полиса</p>
      <DatePicker width={189} mt={8} />
    </>
  )
}

export default MainCostRegistrationInsured