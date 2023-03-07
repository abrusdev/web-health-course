import classes from "./tariff.module.css";
import MainCostTariffItem from "@/components/main-cost/tariff-item";
import { cn } from "@/utils";

function MainCostTariff({ tariff, isVisible, onSelect }) {

  const renderedItems = tariff.items.map((item) => {
    return (
      <MainCostTariffItem key={item.id} item={item} onSelect={onSelect} />
    )
  })

  return (
    <div className={classes.content}>
      <div className={cn(classes.innerContent, isVisible && classes.activeInnerContent)}>

        <h3 className={classes.title}>{tariff.title}</h3>

        <p className={classes.desc}>{tariff.desc}</p>

        <div className={classes.itemsContent}>
          {renderedItems}
        </div>
      </div>
    </div>
  )
}

export default MainCostTariff;
