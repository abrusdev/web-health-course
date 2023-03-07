import classes from "./item.module.css";
import { cn } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core";
import getItemById from "@/components/main-inclusions/utils/getItemById";
import { useStyles as useCustomStyles } from "@/pages/context/StyleContext";

const useStyles = makeStyles(() => ({
  content: {
    flex: ({ props }) => (props && props.flex ? props.flex : ''),
    width: ({ props }) => (props && props.width ? props.width : ''),
    height: ({ props }) => (props && props.height ? props.height : ''),
  },
  image: {
    maxWidth: '100%',
    position: ({ isMobile }) => isMobile ? 'relative' : 'absolute',
    marginTop: ({ isMobile }) => isMobile ? 12 : 0,
    margin: "0 auto",
    left: ({ props }) => props && props.left ? props.left : 'auto',
    bottom: ({ props }) => props && props.bottom ? props.bottom : 'auto',
  }
}));

function MainInclusionItem({ item }) {

  const { isMobile } = useCustomStyles();

  const [isOpen, setIsOpen] = useState(false)

  const { desktop, mobile } = item;

  console.log({ props: isMobile ? mobile : desktop, isMobile });

  const styles = useStyles({ props: isMobile ? mobile : desktop, isMobile });

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className={cn(styles.content, classes.content)}>
      <div className={classes.innerContent}>
        <h3 className={classes.title}>{item.title}</h3>

        <div className={cn(classes.detailsContent, isOpen && classes.activeDetailsContent)}>
          {getItemById(item.id)}
        </div>

        {isOpen || <img src='/icons/ic_next.svg' alt="next" className={classes.next} onClick={handleOpen} />}
        {isOpen && <img src='/icons/ic_prev.svg' alt="prev" className={classes.prev} onClick={handleClose} />}
      </div>

      <img src={item.src} alt={item.title} className={styles.image} />
    </div>
  );
}

export default MainInclusionItem;