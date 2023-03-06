import classes from "./tariff.module.css";
import MainCostTariffItem from "@/components/main-cost/tariff-item";

function MainCostTariff({ tariff }) {

  const renderedItems = tariff.items.map((item) => {
    return (
      <MainCostTariffItem key={item.id} item={item} />
    )
  })

  return (
    <div className={classes.content}>

      <h3 className={classes.title}>{tariff.title}</h3>

      <p className={classes.desc}>{tariff.desc}</p>

      <div className={classes.innerContent}>
        {renderedItems}
      </div>
    </div>
  )
}

export default MainCostTariff;
