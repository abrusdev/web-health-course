import classes from "./tab.module.css";
import { cn } from "@/utils";
import Image from "next/image";

function MainCostTab({ title, isActive, onClick }) {

  return (
    <div className={cn(classes.content, isActive && classes.activeContent)} onClick={onClick}>
      <p className={cn(classes.title, isActive && classes.activeTitle)}>{title}</p>

      <Image src="/icons/ic_pointer_bottom.svg" alt="bottom pointer" width={24} height={24} />
    </div>
  );
}

export default MainCostTab;