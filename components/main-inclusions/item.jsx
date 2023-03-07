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

  const [isOpen, setIsOpen] = useState(false)

  const { desktop } = item;
  const styles = useStyles({ desktop });

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className={cn(styles.content, classes.content)}>
      <img src={item.src} alt={item.title} className={styles.image} />

      <div className={classes.innerContent}>
        <h3 className={classes.title}>{item.title}</h3>

        <div className={cn(classes.detailsContent, isOpen && classes.activeDetailsContent)}>

        </div>

        {isOpen || <img src='/icons/ic_next.svg' alt="next" className={classes.next} onClick={handleOpen} />}
        {isOpen && <img src='/icons/ic_prev.svg' alt="prev" className={classes.prev} onClick={handleClose} />}
      </div>
    </div>
  );
}

export default MainInclusionItem;