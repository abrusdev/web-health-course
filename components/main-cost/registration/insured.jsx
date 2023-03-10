import Input from "@/components/input";
import DatePicker from "@/components/date-picker";
import { useState } from "react";
import MultiCheckBox from "@/components/check-box/multi";
import PhoneInput from "@/components/input/phone";
import { useRegistration } from "@/context/RegistrationContext";

function MainCostRegistrationInsured({ classes, item = {}, onChange }) {

  const { data, setData } = useRegistration();
  const [insured, setInsured] = useState(item);

  const handleChange = (props) => {
    setInsured({ ...insured, ...props });
    onChange({ ...insured, ...props });
  }

  return (
    <div>
      <div className={classes.withTwoItems} style={{ marginTop: 24 }}>
        <div>
          <p className={classes.label}>ФИО*</p>
          <Input
            width={524} mt={8}
            defaultValue={item && item.full_name ? item.full_name : ""}
            hasError={!!data.errors && !!data.errors.insuredName && !insured.full_name}
            onChange={(value) => handleChange({ full_name: value })} />
        </div>

        <div>
          <p>Дата рождения*</p>
          <DatePicker
            width={194} mt={8}
            defaultValue={item && item.birth_date ? item.birth_date : ""}
            hasError={!!data.errors && !!data.errors.insuredDate && !insured.birth_date}
            onChange={(value) => handleChange({ birth_date: value })} />
        </div>
      </div>

      <p className={classes.label} style={{ marginTop: 24 }}>Пол*</p>

      <MultiCheckBox label1='Мужской' label2='Женский'
                     onChange={(value) => handleChange({ gender: value })} />

      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <div>
          <p className={classes.label}>Телефон*</p>
          <PhoneInput
            width={244} mt={8} placeholder='+7(___)___-__-__'
            defaultValue={item && item.phone ? item.phone : ""}
            hasError={!!data.errors && !!data.errors.insuredPhone && !insured.phone}
            onChange={(value) => handleChange({ phone: value })} />
        </div>

        <div>
          <p className={classes.label}>Email*</p>
          <Input
            width={318} mt={8}
            defaultValue={item && item.email ? item.email : ""}
            hasError={!!data.errors && !!data.errors.insuredEmail && !insured.email}
            onChange={(value) => handleChange({ email: value })} />
        </div>
      </div>

      <p className={classes.label} style={{ marginTop: 24 }}>Адрес</p>
      <Input
        width={740} mt={8}
        defaultValue={item && item.address ? item.address : ""}
        hasError={!!data.errors && !!data.errors.insuredAddress && !insured.address}
        onChange={(value) => handleChange({ address: value })} />
    </div>
  )
}

export default MainCostRegistrationInsured