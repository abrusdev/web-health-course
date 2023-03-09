import classes from "@/components/main-cost/registration/index.module.css";
import MultiCheckBox from "@/components/check-box/multi";
import Input from "@/components/input";
import TextArea from "@/components/text-area";
import PhoneInput from "@/components/input/phone";
import MainCostRegistrationInsured from "@/components/main-cost/registration/insured";
import { useRegistration } from "@/pages/context/RegistrationContext";
import DatePicker from "@/components/date-picker";

function MainCostRegistrationBusiness({ insuredCount, setInsuredCount }) {

  const { data, setData } = useRegistration()

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

  return (
    <>
      <h3 className={classes.miniTitle} style={{ marginTop: 25 }}>Данные по Страхователю</h3>

      <p className={classes.label} style={{ marginTop: 24 }}>Тип организации</p>
      <MultiCheckBox label1='ИП' label2='ООО' />

      <p className={classes.label} style={{ marginTop: 24 }}>Наименование организации</p>
      <Input width={580} mt={8} />

      <p className={classes.label} style={{ marginTop: 24 }}>Адрес местонахождения</p>
      <TextArea width={580} mt={12} placeholder='Кем выдан' />

      <p className={classes.label} style={{ marginTop: 24 }}>ИНН</p>
      <Input width={580} mt={8} />

      <p className={classes.label} style={{ marginTop: 24 }}>КПП</p>
      <Input width={580} mt={8} />

      <p className={classes.label} style={{ marginTop: 24 }}>ОГРН</p>
      <Input width={580} mt={8} />


      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <div>
          <p className={classes.label}>Телефон</p>
          <PhoneInput width={204} mt={8} placeholder='+7(___)___-__-__' />
        </div>

        <div>
          <p className={classes.label}>Email</p>
          <Input width={358} mt={8} />
        </div>
      </div>

      <h3 className={classes.miniTitle} style={{ marginTop: 25 }}>Данные по Застрахованному</h3>

      {renderedInsureds}


      <p className={classes.label} style={{ marginTop: 24 }}>Дата начала действия полиса</p>

      <DatePicker
        width={189} mt={8}
        hasError={!!data.errors && !!data.errors.customDate}
        onChange={(value) => {
          setData({ ...data, custom_date: value })
        }} />

      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <p className={classes.addBtn} onClick={() => setInsuredCount(insuredCount + 1)}>
          + Добавить  Застрахованного ›
        </p>

        <p className={classes.addBtn} >
          + Добавить Застрахованных списком ›
        </p>
      </div>

      <button className={classes.btn}>Отправить данные</button>
    </>
  )
}

export default MainCostRegistrationBusiness

