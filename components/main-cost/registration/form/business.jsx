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
import ErrorModel from "@/components/main-cost/modal/error";
import { useStyles as useCustomStyles } from "@/context/StyleContext";
import Loader from "@/components/loader";

function MainCostRegistrationBusiness({ insuredCount, setInsuredCount, onSubmit }) {
  const { isMobile } = useCustomStyles()

  const { data, setData } = useRegistration()

  const [showExcelModal, setShowExcelModal] = useState(false);

  const [org, setOrg] = useState({});
  const [holder, setHolder] = useState({});

  const [loader, setLoader] = useState(false);
  let [error, setError] = useState(null);

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

  const showError = (message) => {
    if (!error) {
      error = message;
      setError(message)
    }
  }

  const handleSend = () => {
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

      {showExcelModal && <ExcelModal onCancel={() => setShowExcelModal(false)} onSuccess={handleSuccess} />}

      <h3 className={classes.miniTitle} style={{ marginTop: 25 }}>???????????? ???? ????????????????????????</h3>

      <p className={classes.label} style={{ marginTop: 24 }}>?????? ??????????????????????</p>
      <MultiCheckBox
        label1='????' label2='??????'
        onChange={(value) => handleChangeOrg({ legal_form: value === 0 ? "????" : "??????" })} />

      <p className={classes.label} style={{ marginTop: 24 }}>???????????????????????? ??????????????????????</p>
      <Input
        width={isMobile ? '100%' : 580} mt={8}
        onChange={(value) => handleChangeOrg({ full_name: value })}
      />

      <p className={classes.label} style={{ marginTop: 24 }}>?????????? ??????????????????????????????</p>
      <TextArea
        width={isMobile ? '100%' : 580} mt={12}
        onChange={(value) => handleChangeHolder({ address: value })} />

      <p className={classes.label} style={{ marginTop: 24 }}>??????</p>
      <Input
        width={isMobile ? '100%' : 580} mt={8}
        onChange={(value) => handleChangeOrg({ inn: value })}
      />

      <p className={classes.label} style={{ marginTop: 24 }}>??????</p>
      <Input
        width={isMobile ? '100%' : 580} mt={8}
        onChange={(value) => handleChangeOrg({ kpp: value })}
      />

      <p className={classes.label} style={{ marginTop: 24 }}>????????</p>
      <Input
        width={isMobile ? '100%' : 580} mt={8}
        onChange={(value) => handleChangeOrg({ ogrn: value })}
      />


      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <div>
          <p className={classes.label}>??????????????</p>
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

      <h3 className={classes.miniTitle} style={{ marginTop: 25 }}>???????????? ???? ??????????????????????????????</h3>

      {renderedInsureds}


      {/*<p className={classes.label} style={{ marginTop: 24 }}>???????? ???????????? ???????????????? ????????????</p>*/}

      {/*<DatePicker*/}
      {/*  width={189} mt={8}*/}
      {/*  hasError={!!data.errors && !!data.errors.customDate}*/}
      {/*  onChange={(value) => {*/}
      {/*    setData({ ...data, custom_date: undefined })*/}
      {/*  }} />*/}

      <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
        <p className={classes.addBtn} onClick={() => setInsuredCount(insuredCount + 1)}>
          + ???????????????? ?????????????????????????????? ???
        </p>

        <p className={classes.addBtn} onClick={handleShowModal}>
          + ???????????????? ???????????????????????????? ?????????????? ???
        </p>
      </div>

      <p className={classes.addBtn}
         style={{ marginTop: 20 }}
         onClick={() => {
           if (insuredCount > 1) setInsuredCount(insuredCount - 1)
         }}>
        - ?????????????? ???????????? ?????????????????????????????? ???
      </p>

      <button className={classes.btn} onClick={handleSend}>?????????????????? ????????????</button>
    </>
  )
}

export default MainCostRegistrationBusiness

