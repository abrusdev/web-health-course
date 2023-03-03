import classes from "./tariff.module.css";

function MainTariff({ tariff }) {
  return (
    <div className={classes.content}>
      <h3>{tariff.title}</h3>
    </div>
  )
}

export default MainTariff;
