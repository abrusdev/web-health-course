import classes from "./index.module.css"
import { cn } from "@/utils";
import MainCostRegistrationStatus from "@/components/main-cost/registration/status";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import MainCostRegistrationIndividual from "@/components/main-cost/registration/form/individual";
import MainCostRegistrationBusiness from "@/components/main-cost/registration/form/business";
import { useRegistration } from "@/context/RegistrationContext";
import MainCostRegistrationPayment from "@/components/main-cost/registration/payment";
import ErrorModel from "@/components/main-cost/modal/error";
import { useStyles as useCustomStyles } from "@/context/StyleContext";


const useStyles = makeStyles(() => ({
  activeInnerContent: {
    height: ({
      type, step, insuredCount, isMobile
    }) => step === 2 ? 1100 : (type === 0 ? (isMobile ? 1800 : 1400) : (isMobile ? 1450 : 1300)) + (insuredCount * (isMobile ? 540 : 380)),
  }
}))

function MainCostRegistration({ isVisible, step, onSubmit }) {

  const { isMobile } = useCustomStyles()

  const { data, setData } = useRegistration()

  const [insuredCount, setInsuredCount] = useState(1);

  const styles = useStyles({ type: data.holder_type, step, insuredCount, isMobile });

  useEffect(() => {
    if (isVisible)
      setInsuredCount(1);
  }, [isVisible])


  return (
    <div className={classes.content}>
      <div className={cn(classes.innerContent, isVisible && cn(classes.activeInnerContent, styles.activeInnerContent))}>
        <h2 className={classes.title}>Оформление программы Курс здоровья</h2>
        <p
          className={classes.desc}>для {data.holder_type === 0 ? "физических лиц" : "юридических лиц/ ИП"} тариф {data.tariff_type === 0 ? "Базовый" : "Премиум"}</p>

        <div className={classes.statusesContent}>
          <MainCostRegistrationStatus step={1} title='Выбор тарифа' isPassed={step >= 1} width={226} />
          <MainCostRegistrationStatus step={2} title='Оформление' isPassed={step >= 1} width={232} />
          <MainCostRegistrationStatus step={3} title='Подтверждение и оплата' isPassed={step >= 2} width={346} />
        </div>

        {step === 1 && data.holder_type === 0 &&
          <MainCostRegistrationIndividual insuredCount={insuredCount} setInsuredCount={setInsuredCount}
                                          onSubmit={onSubmit} />}

        {step === 1 && data.holder_type === 1 &&
          <MainCostRegistrationBusiness insuredCount={insuredCount} setInsuredCount={setInsuredCount}
                                        onSubmit={onSubmit} />}

        {step === 2 && <MainCostRegistrationPayment data={data} />}
      </div>
    </div>
  )
}

export default MainCostRegistration;