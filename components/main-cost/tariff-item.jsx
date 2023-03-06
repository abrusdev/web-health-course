import classes from "./tariff-item.module.css";

function MainCostTariffItem({ item }) {
  return (
    <div className={classes.content}>
      <h4 className={classes.title}>{item.title}</h4>

      <p>Лимит покрытия</p>
      <h5>{item.limit}</h5>

      <p>Онлайн консультации с врачом</p>
      <h5>{item.online}</h5>

      <p>Очные консультации с врачом</p>
      <h5>{item.face_to_face}</h5>

      <p>Лимит по диагностике</p>
      <h5>Инструментальная: до {item.instrumental}</h5>
      <h5>Лабораторная: до {item.laboratory}</h5>

      <p>Выезд терапевта на дом</p>
      <h5>{item.departure}</h5>

      <p>Стоимость программы</p>
      <h5>10 720 ₽</h5>

      <button>Оформить</button>
    </div>
  )
}

export default MainCostTariffItem;