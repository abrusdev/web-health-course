import classes from "./item.module.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  image: {
    height: ({ item }) => item.image_height
  }
}))

function MainCredibilityItem({ item }) {
  const styles = useStyles({ item })

  return (
    <div className={classes.content}>
      <img className={styles.image} src={item.src} alt="image" />

      <h3 className={classes.title}>{item.title}</h3>

      <p className={classes.desc}>{item.desc}</p>
    </div>
  )
}

export default MainCredibilityItem;