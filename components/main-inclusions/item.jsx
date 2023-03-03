import classes from "./item.module.css";
import { cn } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  content: {
    flex: ({ desktop }) => (desktop.flex ? desktop.flex : ''),
    width: ({ desktop }) => (desktop.width ? desktop.width : ''),
    height: ({ desktop }) => (desktop.height ? desktop.height : ''),
  },
  image: {
    position: 'absolute',
    left: ({ desktop }) => desktop.left,
    bottom: ({ desktop }) => desktop.bottom,
  }
}));

function MainInclusionItem({ item }) {

  const { desktop } = item;
  const styles = useStyles({ desktop });

  return (
    <div className={cn(styles.content, classes.content)}>
      <img src={item.src} alt={item.title} className={styles.image} />

      <div className={classes.innerContent}>
        <h3 className={classes.title}>{item.title}</h3>
        <img src='/icons/ic_next.svg' alt="next" className={classes.next} />
      </div>
    </div>
  );
}

export default MainInclusionItem;