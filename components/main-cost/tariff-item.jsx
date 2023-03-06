import classes from "./tariff-item.module.css";
import { cn } from "@/utils";
import Image from "next/image";

function MainCostTariffItem({ item }) {
  return (
    <div className={classes.content}>
      <h4 className={classes.title}>{item.title}</h4>

      <p className={cn(classes.label, classes.mt20)}>Лимит покрытия</p>
      <h5 className={classes.limit}>{item.limit}</h5>

      <p className={cn(classes.label, classes.mt20)}>Онлайн консультации с врачом</p>
      <div className={classes.onlineContent}>
        <Image src="/icons/ic_ok.svg" alt="ok" width={24} height={24} />
        <h5 className={classes.online}>{item.online}</h5>
      </div>

      <p className={cn(classes.label, classes.mt14)}>Очные консультации с врачом</p>
      <div className={classes.onlineContent}>
        <Image src="/icons/ic_ok.svg" alt="ok" width={24} height={24} />
        <h5 className={classes.online}>{item.face_to_face}</h5>
      </div>

      <p className={cn(classes.label, classes.mt14)}>Лимит по диагностике</p>
      <h5 className={classes.instrumental}>Инструментальная: до {item.instrumental}</h5>
      <h5 className={classes.instrumental}>Лабораторная: до {item.laboratory}</h5>

      <p className={cn(classes.label, classes.mt14)}>Выезд терапевта на дом</p>
      <h5 className={classes.online}>{item.departure}</h5>

      <p className={cn(classes.label, classes.mt20)}>Стоимость программы</p>
      <h5 className={classes.price}>10 720 ₽</h5>

      <button className={cn(classes.btn, classes.mt20)}>Оформить</button>
    </div>
  )
}

export default MainCostTariffItem;