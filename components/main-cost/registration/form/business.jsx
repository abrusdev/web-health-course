import classes from "@/components/main-cost/registration/index.module.css";
import MultiCheckBox from "@/components/check-box/multi";
import Input from "@/components/input";
import TextArea from "@/components/text-area";
import PhoneInput from "@/components/input/phone";
import MainCostRegistrationInsured from "@/components/main-cost/registration/insured";
import DatePicker from "@/components/date-picker";
import { useState } from "react";
import ExcelModal from "@/components/main-cost/modal/excel";
import axios from "axios";
import { useRegistration } from "@/context/RegistrationContext";

function MainCostRegistrationBusiness({ insuredCount, setInsuredCount, onSubmit }) {

  const { data, setData } = useRegistration()

  const [showExcelModal, setShowExcelModal] = useState(false);

  const [org, setOrg] = useState({});
  const [holder, setHolder] = useState({});

  const renderedInsureds = []

  for (let i = 0; i < insuredCount; i++) {
    const handleChangeInsured = (value) => {
      if (!data.insureds) data.insureds = []

      data.insureds[i] = value

      setData({ ...data })
    }

    renderedInsureds.push(
      <MainCostRegistrationInsured
        key={i} item={data.insureds && data.insureds[i]}
        classes={classes}
        onChange={handleChangeInsured} />
    )
  }

  const handleChangeOrg = (props) => {
    const newOrg = { ...org, ...props }

    setOrg(newOrg)
    setData({ ...data, organization: newOrg })
  }

  const handleChangeHolder = (props) => {
    const newHolder = { ...holder, ...props }

    setHolder(newHolder)
    setData({ ...data, holder: newHolder })
  }

  const handleShowModal = () => {
    setShowExcelModal(true);
  }

  const handleSuccess = (list) => {
    setShowExcelModal(false);
    setInsuredCount(insuredCount + list.length)

    console.log([
      ...data.insureds,
      ...list
    ]);

    setData({
      ...data,
      insureds: [
        ...data.insureds,
        ...list,
      ]
    })
  }

  const handleSend = () => {
    axios.post("https://kz-backend.vsk-trust.ru/api/v1/kz/calculate_form", data)
      .then(({ data: response }) => {
        if (response && response.data) {
          setData({ ...data, result: response.data })
          onSubmit()
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      {showExcelModal && <ExcelModal onCancel={() => setShowExcelModal(false)} onSuccess={handleSuccess} />}

      <h3 className={classes.miniTitle} style={{ marginTop: 25 }}>Данные по Страхователю</h3>

      <p className={classes.label} style={{ marginTop: 24 }}>Тип организации</p>
      <MultiCheckBox
        label1='ИП' label2='ООО'
        onChange={(value) => handleChangeOrg({ legal_form: value === 0 ? "ИП" : "ООО" })} />

      <p className={classes.label} style={{ marginTop: 24 }}>Наименование организации</p>
      <Input
        width={580} mt={8}
        onChange={(value) => handleChangeOrg({ full_name: value })}
      />

      <p className={classes.label} style={{ marginTop: 24 }}>Адрес местонахождения</p>
      <TextArea
        width={580} mt={12}
        onChange={(value) => handleChangeHolder({ address: value })} />

      <p className={classes.label} style={{ marginTop: 24 }}>ИНН</p>
      <Input
        width={580} mt={8}
        onChange={(value) => handleChangeOrg({ inn: value })}
      />

      <p className={classes.label} style={{ marginTop: 24 }}>КПП</p>
      <Input
        width={580} mt={8}
        onChange={(value) => handleChangeOrg({ kpp: value })}
      />

      <p className={classes.label} style={{ marginTop: 24 }}>ОГРН</p>
      <Input
        width={580} mt={8}
        onChange={(value) => handleChangeOrg({ ogrn: value })}
      />


      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <div>
          <p className={classes.label}>Телефон</p>
          <PhoneInput
            width={244} mt={8} placeholder='+7(___)___-__-__'
            onChange={(value) => handleChangeHolder({ phone: value })} />
        </div>

        <div>
          <p className={classes.label}>Email</p>
          <Input
            width={318} mt={8}
            onChange={(value) => handleChangeHolder({ email: value })} />
        </div>
      </div>

      <h3 className={classes.miniTitle} style={{ marginTop: 25 }}>Данные по Застрахованному</h3>

      {renderedInsureds}


      {/*<p className={classes.label} style={{ marginTop: 24 }}>Дата начала действия полиса</p>*/}

      {/*<DatePicker*/}
      {/*  width={189} mt={8}*/}
      {/*  hasError={!!data.errors && !!data.errors.customDate}*/}
      {/*  onChange={(value) => {*/}
      {/*    setData({ ...data, custom_date: undefined })*/}
      {/*  }} />*/}

      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <p className={classes.addBtn} onClick={() => setInsuredCount(insuredCount + 1)}>
          + Добавить Застрахованного ›
        </p>

        <p className={classes.addBtn} onClick={handleShowModal}>
          + Добавить Застрахованных списком ›
        </p>
      </div>

      <button className={classes.btn} onClick={handleSend}>Отправить данные</button>
    </>
  )
}

export default MainCostRegistrationBusiness

