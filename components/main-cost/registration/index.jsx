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
import MainCostRegistrationIndividual from "@/components/main-cost/registration/types/individual";
import MainCostRegistrationBusiness from "@/components/main-cost/registration/types/business";


const useStyles = makeStyles(() => ({
  activeInnerContent: {
    height: ({ type, insuredCount }) => (type === 0 ? 1500 : 1350) + (insuredCount * 380),
  }
}))

function MainCostRegistration({ isVisible }) {

  const { data, setData } = useRegistration()

  const [insuredCount, setInsuredCount] = useState(1);

  const styles = useStyles({ type: data.holder_type, insuredCount });

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

        {data.holder_type === 0 &&
          <MainCostRegistrationIndividual insuredCount={insuredCount} setInsuredCount={setInsuredCount} />}

        {data.holder_type === 1 &&
          <MainCostRegistrationBusiness insuredCount={insuredCount} setInsuredCount={setInsuredCount} />}

      </div>
    </div>
  )
}

export default MainCostRegistration;