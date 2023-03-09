import classes from "./index.module.css"
import { cn } from "@/utils";
import MainCostRegistrationStatus from "@/components/main-cost/registration/status";
import Input from "@/components/input";
import DatePicker from "@/components/date-picker";
import TextArea from "@/components/text-area";
import CheckBox from "@/components/check-box";
import MainCostRegistrationInsured from "@/components/main-cost/registration/insured";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useRegistration } from "@/pages/context/RegistrationContext";
import MultiCheckBox from "@/components/check-box/multi";
import axios from "axios";
import PhoneInput from "@/components/input/phone";

const useStyles = makeStyles(() => ({
  activeInnerContent: {
    height: ({ insuredCount }) => 1500 + (insuredCount * 380),
  }
}))

function MainCostRegistration({ isVisible }) {

  const { data, setData } = useRegistration()

  const [user, setUser] = useState({})
  const [holder, setHolder] = useState({})

  const [insuredCount, setInsuredCount] = useState(1);

  const styles = useStyles({ insuredCount });

  const renderedInsureds = []

  for (let i = 0; i < insuredCount; i++) {
    const handleChangeInsured = (value) => {
      if (!data.insureds) data.insureds = []

      data.insureds[i] = value

      setData({ ...data })
    }

    renderedInsureds.push(
      <MainCostRegistrationInsured key={i} classes={classes} onChange={handleChangeInsured} />
    )
  }

  const handleChangeUser = (props) => {
    const newUser = { ...user, ...props }

    setUser(newUser)
    setData({ ...data, person: newUser })
  }

  const handleChangeHolder = (props) => {
    const newHolder = { ...holder, ...props }

    setHolder(newHolder)
    setData({ ...data, holder: newHolder })
  }

  console.log(data);

  useEffect(() => {
    if (!data.errors) return;

    let errors = data.errors
    let isChanged = false

    if (data.errors.full_name && user.full_name) {
      errors = { ...errors, full_name: undefined };
      isChanged = true
    }

    if (data.errors.birth_date && (user.birth_date && user.birth_date.length >= 10)) {
      errors = { ...errors, birth_date: undefined };
      isChanged = true
    }

    if (data.errors.address && holder.address) {
      errors = { ...errors, address: undefined };
      isChanged = true
    }

    if (data.errors.phone && (holder.phone && holder.phone.length === 11)) {
      errors = { ...errors, phone: undefined };
      isChanged = true
    }

    if (data.errors.email && holder.email) {
      errors = { ...errors, email: undefined };
      isChanged = true
    }

    if (data.errors.passSerial && user.passport_serial) {
      errors = { ...errors, passSerial: undefined };
      isChanged = true
    }

    if (data.errors.passNumber && user.passport_number) {
      errors = { ...errors, passNumber: undefined };
      isChanged = true
    }

    if (data.errors.dateIssue && user.date_issue) {
      errors = { ...errors, dateIssue: undefined };
      isChanged = true
    }

    if (data.errors.whom && user.whom) {
      errors = { ...errors, whom: undefined };
      isChanged = true
    }

    if (data.errors.inn && user.inn) {
      errors = { ...errors, inn: undefined };
      isChanged = true
    }

    if (data.errors.divisionCode && user.divisionCode) {
      errors = { ...errors, divisionCode: undefined };
      isChanged = true
    }

    if (data.errors.customDate && data.custom_date) {
      errors = { ...errors, customDate: undefined };
      isChanged = true
    }

    if (isChanged)
      setData({ ...data, errors })

  }, [data]);

  const handleSend = () => {
    let errors;

    if (!user.full_name) {
      errors = { ...errors, full_name: "error" };
    }

    if (!user.birth_date || user.birth_date.length < 10) {
      errors = { ...errors, birth_date: "error" };
    }

    if (!holder.address) {
      errors = { ...errors, address: "error" };
    }

    if (!holder.phone || holder.phone.length !== 11) {
      errors = { ...errors, phone: "error" };
    }

    if (!holder.email) {
      errors = { ...errors, email: "error" };
    }

    if (!user.passport_serial) {
      errors = { ...errors, passSerial: "error" };
    }

    if (!user.passport_number) {
      errors = { ...errors, passNumber: "error" };
    }

    if (!user.date_issue) {
      errors = { ...errors, dateIssue: "error" };
    }

    if (!user.whom) {
      errors = { ...errors, whom: "error" };
    }

    if (!user.inn) {
      errors = { ...errors, inn: "error" };
    }

    if (!user.division_code) {
      errors = { ...errors, divisionCode: "error" };
    }

    if (!user.custom_date) {
      errors = { ...errors, customDate: "error" };
    }

    if (errors) {
      return setData({ ...data, errors })
    }


    axios.post("https://kz-backend.vsk-trust.ru/api/v1/kz/calculate_form", data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className={classes.content}>
      <div className={cn(classes.innerContent, isVisible && cn(classes.activeInnerContent, styles.activeInnerContent))}>
        <h2 className={classes.title}>Оформление программы Курс здоровья</h2>
        <p className={classes.desc}>для физических лиц тариф Базовый</p>

        <div className={classes.statusesContent}>
          <MainCostRegistrationStatus step={1} title='Выбор тарифа' isPassed width={226} />
          <MainCostRegistrationStatus step={2} title='Оформление' isPassed width={232} />
          <MainCostRegistrationStatus step={3} title='Подтверждение и оплата' isPassed={false} width={346} />
        </div>

        <h3 className={classes.miniTitle} style={{ marginTop: 25 }}>Данные по Страхователю</h3>

        <div className={classes.withTwoItems} style={{ marginTop: 24 }}>
          <div>
            <p className={classes.label}>ФИО</p>
            <Input
              width={524} mt={8} hasError={!!data.errors && !!data.errors.full_name}
              onChange={(value) => handleChangeUser({ full_name: value })}
            />
          </div>

          <div>
            <p className={classes.label}>Дата рождения</p>
            <DatePicker
              width={194} mt={8} hasError={!!data.errors && !!data.errors.birth_date}
              onChange={(value) => handleChangeUser({ birth_date: value })} />
          </div>
        </div>

        <p className={classes.label} style={{ marginTop: 24 }}>Пол</p>

        <MultiCheckBox label1='Мужской' label2='Женский'
                       onChange={(value) => handleChangeUser({ gender: value })} />

        <p className={classes.label} style={{ marginTop: 24 }}>Адрес</p>
        <Input
          width={740} mt={8} hasError={!!data.errors && !!data.errors.address}
          onChange={(value) => handleChangeHolder({ address: value })}
        />

        <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
          <div>
            <p className={classes.label}>Телефон</p>
            <PhoneInput width={204} mt={8} placeholder='+7(___)___-__-__'
                        hasError={!!data.errors && !!data.errors.phone}
                        onChange={(value) => handleChangeHolder({ phone: value })} />
          </div>

          <div>
            <p className={classes.label}>Email</p>
            <Input width={358} mt={8}
                   hasError={!!data.errors && !!data.errors.email}
                   onChange={(value) => handleChangeHolder({ email: value })} />
          </div>
        </div>

        <p className={classes.label} style={{ marginTop: 24 }}>Паспортные данные</p>
        <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
          <Input width={154} mt={8} placeholder='Серия'
                 hasError={!!data.errors && !!data.errors.passSerial}
                 onChange={(value) => handleChangeUser({ passport_serial: value })} />
          <Input width={204} mt={8} placeholder='Номер'
                 hasError={!!data.errors && !!data.errors.passNumber}
                 onChange={(value) => handleChangeUser({ passport_number: value })} />
          <DatePicker width={204} mt={8}
                      hasError={!!data.errors && !!data.errors.dateIssue}
                      onChange={(value) => handleChangeUser({ date_issue: value })} />
        </div>

        <TextArea width={587} mt={12} placeholder='Кем выдан'
                  hasError={!!data.errors && !!data.errors.whom}
                  onChange={(value) => handleChangeUser({ whom: value })} />

        <div className={classes.withTwoItems} style={{ width: 586 }}>
          <Input width={212} mt={12} placeholder='Код подразделения'
                 hasError={!!data.errors && !!data.errors.divisionCode}
                 onChange={(value) => handleChangeUser({ division_code: value })} />
        </div>

        <p className={classes.label} style={{ marginTop: 24 }}>ИНН</p>
        <Input width={364} mt={12} placeholder='ИНН'
               hasError={!!data.errors && !!data.errors.inn}
               onChange={(value) => handleChangeUser({ inn: value })} />

        <h3 className={classes.miniTitle} style={{ marginTop: 64 }}>Данные по Застрахованному</h3>

        <div className={classes.withGap10} style={{ marginTop: 16 }}>
          <CheckBox />

          <p className={classes.label}>Страхователь является Застрахованным</p>
        </div>

        {renderedInsureds}

        <p className={classes.label} style={{ marginTop: 24 }}>Дата начала действия полиса</p>
        <DatePicker
          width={189} mt={8}
          hasError={!!data.errors && !!data.errors.customDate}
          onChange={(value) => {
            setData({ ...data, custom_date: value })
          }} />

        <p className={classes.addBtn} onClick={() => setInsuredCount(insuredCount + 1)}>
          + Добавить еще одного Застрахованного ›
        </p>

        <button className={classes.btn} onClick={handleSend}>Отправить данные</button>

      </div>
    </div>
  )
}

export default MainCostRegistration;