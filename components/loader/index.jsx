import classes from "./index.module.css";
import { createPortal } from "react-dom";
import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";

function Loader() {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector("#loader")
    setMounted(true)

    document.querySelector("body").style.overflow = "hidden"

    return () => {
      document.querySelector("body").style.overflow = "auto"
    }
  }, [])

  return (mounted && ref.current) ? createPortal((
    <div className={classes.content}>
      <div className={cn(classes.innerContent)}>
        <span className={classes.loader}></span>
      </div>
    </div>
  ), ref.current) : null
}

export default Loader;