import classes from "./index.module.css"
import { cn } from "@/utils";
import MainCostRegistrationStatus from "@/components/main-cost/registration/status";
import Input from "@/components/input";
import DatePicker from "@/components/date-picker";

function MainCostRegistration({ isVisible }) {
  return (
    <div className={classes.content}>
      <div className={cn(classes.innerContent, isVisible && classes.activeInnerContent)}>
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
            <Input width={524} mt={8} />
          </div>

          <div>
            <p className={classes.label}>Дата рождения*</p>
            <DatePicker width={194} mt={8} />
            {/*<Input width={194} mt={8} />*/}
          </div>
        </div>

        <p className={classes.label} style={{ marginTop: 24 }}>Адрес</p>
        <Input width={740} mt={8} />

        <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
          <div>
            <p className={classes.label}>Телефон*</p>
            <Input width={184} mt={8} />
          </div>

          <div>
            <p className={classes.label}>Email*</p>
            <Input width={378} mt={8} />
          </div>
        </div>

        <p className={classes.label} style={{ marginTop: 24 }}>Паспортные данные</p>
        <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
          <Input width={154} mt={8} />
          <Input width={204} mt={8} />
          <Input width={204} mt={8} />
        </div>

        <Input width={587} mt={12} />

        <Input width={212} mt={12} />

        <h3 className={classes.miniTitle} style={{ marginTop: 64 }}>Данные по Страхователю</h3>

        <div className={classes.withTwoItems} style={{ marginTop: 24 }}>
          <div>
            <p className={classes.label}>ФИО*</p>
            <Input width={524} mt={8} />
          </div>

          <div>
            <p>Дата рождения*</p>
            <Input width={194} mt={8} />
          </div>
        </div>

        <div className={classes.withTwoItems} style={{ marginTop: 24, width: 586 }}>
          <div>
            <p className={classes.label}>Телефон*</p>
            <Input width={184} mt={8} />
          </div>

          <div>
            <p className={classes.label}>Email*</p>
            <Input width={378} mt={8} />
          </div>
        </div>

        <p className={classes.label} style={{ marginTop: 24 }}>Дата начала действия полиса</p>
        <Input width={189} mt={8} />

        <button className={classes.btn}>Отправить данные</button>

      </div>
    </div>
  )
}

export default MainCostRegistration;