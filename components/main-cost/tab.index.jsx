import classes from "./tab.module.css";
import { cn } from "@/utils";
import Image from "next/image";
import { useStyles } from "@/context/StyleContext";

function MainCostTab({ title, isActive, onClick }) {

  const { isMobile } = useStyles();

  return (
    <div className={cn(classes.content, isActive && classes.activeContent)} onClick={onClick}>
      <p className={cn(classes.title, isActive && classes.activeTitle)}>{title}</p>

      <Image src="/icons/ic_pointer_bottom.svg" alt="bottom pointer" width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} />
    </div>
  );
}

export default MainCostTab;