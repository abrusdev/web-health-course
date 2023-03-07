import classes from "./index.module.css"
import { cn } from "@/utils";
import MainCostRegistrationStatus from "@/components/main-cost/registration/status";
import Input from "@/components/input";

function MainCostRegistration({ isVisible }) {
  return (
    <div className={classes.content}>
      <div className={cn(classes.innerContent, isVisible && classes.activeInnerContent)}>
        <h2 className={classes.title}>Оформление программы Курс здоровья</h2>
        <p className={classes.desc}>для физических лиц тариф Базовый</p>

        <div className={classes.statusesContent}>
          <MainCostRegistrationStatus step={1} title='Выбор тарифа' isPassed width={226}/>
          <MainCostRegistrationStatus step={2} title='Оформление' isPassed width={232}/>
          <MainCostRegistrationStatus step={3} title='Подтверждение и оплата' isPassed={false} width={346} />
        </div>

        <h3>Данные по Страхователю</h3>

        <div>

          <div>
            <div>
              <p>ФИО*</p>
              <Input />
            </div>

            <div>
              <p>Дата рождения*</p>
              <Input />
            </div>
          </div>

          <div>
            <p>Адрес</p>
            <Input />
          </div>

          <div>
            <div>
              <p>Телефон*</p>
              <Input />
            </div>

            <div>
              <p>Email*</p>
              <Input />
            </div>
          </div>

          <p>Паспортные данные</p>
          <div>
            <Input />
            <Input />
            <Input />
          </div>

          <Input />

          <Input />

          <h3>Данные по Застрахованному</h3>

          <div>
            <div>
              <p>ФИО*</p>
              <Input />
            </div>

            <div>
              <p>Дата рождения*</p>
              <Input />
            </div>
          </div>

          <div>
            <div>
              <p>Телефон*</p>
              <Input />
            </div>

            <div>
              <p>Email*</p>
              <Input />
            </div>
          </div>

          <p>Дата начала действия полиса</p>
          <Input />

          <button>Отправить данные</button>

        </div>
      </div>
    </div>
  )
}

export default MainCostRegistration;