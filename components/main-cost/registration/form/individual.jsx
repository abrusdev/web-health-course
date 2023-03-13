import classes from "@/components/main-cost/registration/index.module.css";
import Input from "@/components/input";
import DatePicker from "@/components/date-picker";
import MultiCheckBox from "@/components/check-box/multi";
import PhoneInput from "@/components/input/phone";
import TextArea from "@/components/text-area";
import { useEffect, useState } from "react";
import CheckBox from "@/components/check-box";
import axios from "axios";
import MainCostRegistrationInsured from "@/components/main-cost/registration/insured";
import { useRegistration } from "@/context/RegistrationContext";
import ErrorModel from "@/components/main-cost/modal/error";
import { useStyles } from "@/context/StyleContext";
import Loader from "@/components/loader";


function MainCostRegistrationIndividual({ insuredCount, setInsuredCount, onSubmit }) {

  const { isMobile } = useStyles();

  const { data, setData } = useRegistration()

  const [isItselfInsured, setIsItselfInsured] = useState(false);

  const [user, setUser] = useState({});
  const [holder, setHolder] = useState({});

  let [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const [renderedInsureds, setRenderedInsureds] = useState([]);

  const [lastDefaultInsured, setLastDefaultInsured] = useState({});

  function fetchInsureds() {
    for (let i = 0; i < insuredCount; i++) {
      const handleChangeInsured = (value) => {
        if (!data.insureds) data.insureds = []

        data.insureds[i] = value

        setData({ ...data })
      }

      const list = []

      list.push(
        <MainCostRegistrationInsured key={i} classes={classes} onChange={handleChangeInsured} />
      )

      setRenderedInsureds(list);
    }
  }

  const handleChangeInsured = () => {
    if (isItselfInsured) {
      setLastDefaultInsured(data.insureds[0]);
      data.insureds[0] = {
        full_name: user.full_name,
        birth_date: user.birth_date,
        gender: user.gender,
        phone: holder.phone,
        email: holder.email,
        address: holder.address
      }
    } else
      data.insureds[0] = lastDefaultInsured;

    setData({ ...data })

    fetchInsureds()
  }

  useEffect(() => {
    handleChangeInsured()
  }, [isItselfInsured, user, holder]);

  const handleChangeUser = (props) => {
    if (isItselfInsured)
      handleChangeInsured();

    const newUser = { ...user, ...props }

    setUser(newUser)
    setData({ ...data, person: newUser })
  }

  const handleChangeHolder = (props) => {
    const newHolder = { ...holder, ...props }

    setHolder(newHolder)
    setData({ ...data, holder: newHolder })
  }


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

    if (data.errors.divisionCode && user.division_code) {
      errors = { ...errors, divisionCode: undefined };
      isChanged = true
    }

    if (isChanged)
      setData({ ...data, errors })

  }, [data]);

  const showError = (message) => {
    if (!error) {
      error = message;
      setError(message)
    }
  }

  const handleSend = () => {
    let errors;

    if (!user.full_name) {
      showError("Заполните ФИО");
      errors = { ...errors, full_name: "error" };
    }

    if (!user.birth_date || user.birth_date.length < 10) {
      showError("Заполните Дата рождения");
      errors = { ...errors, birth_date: "error" };
    }

    if (!holder.address) {
      showError("Заполните Адрес");
      errors = { ...errors, address: "error" };
    }

    if (!holder.phone || holder.phone.length !== 11) {
      showError("Заполните Телефон");
      errors = { ...errors, phone: "error" };
    }

    if (!holder.email) {
      showError("Заполните Email");
      errors = { ...errors, email: "error" };
    }

    if (!user.passport_serial) {
      showError("Заполните Паспортные данные");
      errors = { ...errors, passSerial: "error" };
    }

    if (!user.passport_number) {
      showError("Заполните Паспортные данные");
      errors = { ...errors, passNumber: "error" };
    }

    if (!user.date_issue) {
      showError("Заполните Паспортные данные");
      errors = { ...errors, dateIssue: "error" };
    }

    if (!user.whom) {
      showError("Заполните Паспортные данные");
      errors = { ...errors, whom: "error" };
    }

    if (!user.inn) {
      showError("Заполните Паспортные данные");
      errors = { ...errors, inn: "error" };
    }

    if (!user.division_code) {
      showError("Заполните Паспортные данные");
      errors = { ...errors, divisionCode: "error" };
    }

    if (!data.insureds) data.insureds = [{}];

    for (let i = data.insureds.length; i < insuredCount; i++) {
      data.insureds.push({});
    }

    if (!isItselfInsured)
      data.insureds.forEach((insured) => {
        if (!insured.full_name) {
          showError("Заполните Данные по Застрахованному");
          errors = { ...errors, insuredName: "error" };
        }

        if (!insured.birth_date) {
          showError("Заполните Данные по Застрахованному");
          errors = { ...errors, insuredDate: "error" };
        }

        if (!insured.phone) {
          showError("Заполните Данные по Застрахованному");
          errors = { ...errors, insuredPhone: "error" };
        }

        if (!insured.email) {
          showError("Заполните Данные по Застрахованному");
          errors = { ...errors, insuredEmail: "error" };
        }

        if (!insured.address) {
          showError("Заполните Данные по Застрахованному");
          errors = { ...errors, insuredAddress: "error" };
        }
      })

    if (errors) {
      return setData({ ...data, errors })
    }

    setLoader(true);

    axios.post("https://kz-backend.vsk-trust.ru/api/v1/kz/calculate_form", data)
      .then(({ data: response }) => {
        setLoader(false);
        if (response && response.data) {
          setData({ ...data, result: response.data })
          onSubmit()
        }
      })
      .catch(({ response }) => {
        setLoader(false);
        if (response.data.error)
          showError(response.data.error)
      })
  }

  return (
    <>
      {loader && <Loader />}

      {error && <ErrorModel message={error} onCancel={() => setError(null)} />}

      <h3 className={classes.miniTitle} style={{ marginTop: 25 }}>Данные по Страхователю</h3>

      <div className={classes.withTwoItems} style={{ marginTop: 24 }}>
        <div>
          <p className={classes.label}>ФИО</p>
          <Input
            width={isMobile ? '100%' : 524} mt={8} hasError={!!data.errors && !!data.errors.full_name}
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
        width={isMobile ? '100%' : 740} mt={8} hasError={!!data.errors && !!data.errors.address}
        onChange={(value) => handleChangeHolder({ address: value })}
      />

      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <div>
          <p className={classes.label}>Телефон</p>
          <PhoneInput width={isMobile ? '100%' : 244} mt={8} placeholder='+7(___)___-__-__'
                      hasError={!!data.errors && !!data.errors.phone}
                      onChange={(value) => handleChangeHolder({ phone: value })} />
        </div>

        <div>
          <p className={classes.label}>Email</p>
          <Input width={isMobile ? '100%' : 318} mt={8}
                 hasError={!!data.errors && !!data.errors.email}
                 onChange={(value) => handleChangeHolder({ email: value })} />
        </div>
      </div>

      <p className={classes.label} style={{ marginTop: 24 }}>Паспортные данные</p>
      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <Input width={154} mt={isMobile ? 0 : 8} placeholder='Серия'
               hasError={!!data.errors && !!data.errors.passSerial}
               onChange={(value) => handleChangeUser({ passport_serial: value })} />
        <Input width={204} mt={isMobile ? 0 : 8} placeholder='Номер'
               hasError={!!data.errors && !!data.errors.passNumber}
               onChange={(value) => handleChangeUser({ passport_number: value })} />
        <DatePicker width={204} mt={isMobile ? 0 : 8}
                    hasError={!!data.errors && !!data.errors.dateIssue}
                    onChange={(value) => handleChangeUser({ date_issue: value })} />
      </div>

      <TextArea width={isMobile ? '100%' : 587} mt={12} placeholder='Кем выдан'
                hasError={!!data.errors && !!data.errors.whom}
                onChange={(value) => handleChangeUser({ whom: value })} />

      <div className={classes.withTwoItems} style={{ width: 586 }}>
        <Input width={212} mt={12} placeholder='Код подразделения'
               hasError={!!data.errors && !!data.errors.divisionCode}
               onChange={(value) => handleChangeUser({ division_code: value })} />
      </div>

      <p className={classes.label} style={{ marginTop: 24 }}>ИНН</p>
      <Input width={isMobile ? '100%' : 364} mt={12} placeholder='ИНН'
             hasError={!!data.errors && !!data.errors.inn}
             onChange={(value) => handleChangeUser({ inn: value })} />

      <h3 className={classes.miniTitle} style={{ marginTop: 64 }}>Данные по Застрахованному</h3>

      <div className={classes.withGap10} style={{ marginTop: 16 }}>
        <CheckBox value={isItselfInsured} onChange={setIsItselfInsured} />

        <p className={classes.label}>Страхователь является Застрахованным</p>
      </div>

      {renderedInsureds}

      <div className={classes.withTwoItems} style={{ marginTop: 24, width: isMobile ? '100%' : 686 }}>

        <p className={classes.addBtn} onClick={() => setInsuredCount(insuredCount + 1)}>
          + Добавить еще одного Застрахованного ›
        </p>

        <p className={classes.addBtn} onClick={() => {
          if (insuredCount > 1) setInsuredCount(insuredCount - 1)
        }}>
          - Удалить одного Застрахованного ›
        </p>
      </div>

      <button className={classes.btn} onClick={handleSend}>Отправить данные</button>
    </>
  )
}

export default MainCostRegistrationIndividual;