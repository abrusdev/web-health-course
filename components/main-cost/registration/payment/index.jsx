import classes from "./index.module.css";
import CheckBox from "@/components/check-box";
import { useRegistration } from "@/context/RegistrationContext";
import axios from "axios";
import { useState } from "react";
import { scrollTo } from "@/utils";

function MainCostRegistrationPayment() {
  const [hasFirstPolicy, setHasFirstPolicy] = useState(false);
  const [hasSecondPolicy, setHasSecondPolicy] = useState(false);

  const { data, setStep } = useRegistration();

  const handleSubmit = () => {

    if (hasFirstPolicy && hasSecondPolicy)
      axios.post("https://kz-backend.vsk-trust.ru/api/v1/kz/buy", {
        amount: data.result.amount,
        policy_number: data.result.policy_number,
        holder_type: data.holder_type
      })
        .then(({ data: response }) => {
          window.open(response.data.buy_url);

          setStep(-1);
          scrollTo("main-cost");
        })
        .catch((error) => {
          console.log(error);
        })
  }

  return (
    <div className={classes.content}>
      <div className={classes.innerContent}>
        <p className={classes.innerLabel}>Количество застрахованных:</p>
        <h3 className={classes.innerTitle}>{data.insureds.length}</h3>
      </div>

      <div className={classes.innerContent} style={{ marginTop: 6 }}>
        <p className={classes.innerLabel}>Стоимость:</p>
        <h3 className={classes.innerTitle}>{data.result.amount} ₽</h3>
      </div>

      <h4 className={classes.title}>Выберите способ оплаты</h4>

      <img src="/images/payment_visa_master.png" alt="payment"
           className={classes.payment} />

      <div className={classes.privacyContent} style={{ marginTop: 14 }}>
        <CheckBox value={hasFirstPolicy} onChange={setHasFirstPolicy} />
        <p className={classes.privacy}>Я согласен с <span>политикой обработки персональных данных</span> и соглашаюсь
          с <span>условиями политики конфиденциальности</span></p>
      </div>

      <div className={classes.privacyContent}>
        <CheckBox value={hasSecondPolicy} onChange={setHasSecondPolicy} />
        <p className={classes.privacy}>Я ознакомлен и согласен с <span>условиями договора</span> по выбранной мною
          программе</p>
      </div>

      <button className={classes.btn} onClick={handleSubmit}>Оплатить</button>
    </div>
  )
}

export default MainCostRegistrationPayment;