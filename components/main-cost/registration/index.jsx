import classes from "./index.module.css"
import { cn } from "@/utils";
import MainCostRegistrationStatus from "@/components/main-cost/registration/status";
import Input from "@/components/input";
import DatePicker from "@/components/date-picker";
import TextArea from "@/components/text-area";
import CheckBox from "@/components/check-box";
import MainCostRegistrationInsured from "@/components/main-cost/registration/insured";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useRegistration } from "@/pages/context/RegistrationContext";

const useStyles = makeStyles(() => ({
  activeInnerContent: {
    height: ({ insuredCount }) => 1200 + (insuredCount * 290),
  }
}))

function MainCostRegistration({ isVisible }) {

  const { data, setData } = useRegistration()

  const [user, setUser] = useState({})
  const [holder, setHolder] = useState({})

  const [insuredCount, setInsuredCount] = useState(0);

  const styles = useStyles({ insuredCount });

  const renderedInsureds = []

  for (let i = 0; i < insuredCount; i++) {
    const handleChangeInsured = (value) => {
      if (!data.insureds) data.insureds = []

      data.insureds[i] = value

      setData({ ...data })
    }

    renderedInsureds.push(
      <MainCostRegistrationInsured classes={classes} onChange={handleChangeInsured} />
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
            <p className={classes.label}>ФИО*</p>
            <Input width={524} mt={8} onChange={(value) => handleChangeUser({ full_name: value })} />
          </div>

          <div>
            <p className={classes.label}>Дата рождения*</p>
            <DatePicker width={194} mt={8} onChange={(value) => handleChangeUser({ birth_date: value })} />
          </div>
        </div>

        <p className={classes.label} style={{ marginTop: 24 }}>Адрес</p>
        <Input width={740} mt={8} onChange={(value) => handleChangeHolder({ address: value })} />

        <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
          <div>
            <p className={classes.label}>Телефон*</p>
            <Input width={184} mt={8} placeholder='+7(___)___-__-__'
                   onChange={(value) => handleChangeHolder({ phone: value })} />
          </div>

          <div>
            <p className={classes.label}>Email*</p>
            <Input width={378} mt={8}
                   onChange={(value) => handleChangeHolder({ email: value })} />
          </div>
        </div>

        <p className={classes.label} style={{ marginTop: 24 }}>Паспортные данные</p>
        <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
          <Input width={154} mt={8} placeholder='Серия*'
                 onChange={(value) => handleChangeUser({ passport_serial: value })} />
          <Input width={204} mt={8} placeholder='Номер*'
                 onChange={(value) => handleChangeUser({ passport_number: value })} />
          <DatePicker width={204} mt={8}
                      onChange={(value) => handleChangeUser({ date_issue: value })} />
        </div>

        <TextArea width={587} mt={12} placeholder='Кем выдан*'
                  onChange={(value) => handleChangeUser({ whom: value })} />

        <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
          <Input width={212} mt={12} placeholder='Код подразделения*'
                 onChange={(value) => handleChangeUser({ division_code: value })} />

          <Input width={364} mt={12} placeholder='ИНН*'
                 onChange={(value) => handleChangeUser({ inn: value })} />
        </div>

        <h3 className={classes.miniTitle} style={{ marginTop: 64 }}>Данные по Застрахованному</h3>

        <div className={classes.withGap10} style={{ marginTop: 16 }}>
          <CheckBox />

          <p className={classes.label}>Страхователь является Застрахованным</p>
        </div>

        {renderedInsureds}

        <p className={classes.addBtn} onClick={() => setInsuredCount(insuredCount + 1)}>
          + Добавить еще одного Застрахованного ›
        </p>

        <button className={classes.btn}>Отправить данные</button>

      </div>
    </div>
  )
}

export default MainCostRegistration;