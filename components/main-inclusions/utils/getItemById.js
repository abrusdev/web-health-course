import classes from "./getItemById.module.css";

function getItemById(id) {
  if (id === 1) {
    return (
      <>
        <h5 className={classes.title}>Удобный персональный сервис</h5>
        <ul className={classes.withDotsContent}>
          <span>Застрахованный может обращаться за любыми услугами через свой Личный кабинет</span>
          <span>
            Нет привязки к конкретному медучреждению: для очных приёмов и обследований застрахованным доступны
            ближайшие к дому или работе отделения
          </span>
          <span>Персональный врач контролирует весь ход выздоровления застрахованного</span>
        </ul>
      </>
    )
  }

  return (
    <></>
  )
}

export default getItemById;