import classes from "./index.module.css";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils";

function BaseModel({ children, onCancel, onSuccess, className }) {
  const contentRef = useRef();
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector("#portal")
    setMounted(true)

    document.querySelector("body").style.overflow = "hidden"

    return () => {
      document.querySelector("body").style.overflow = "auto"
    }
  }, [])

  const handleClick = (e) => {
    if (e.target.contains(contentRef.current))
      onCancel()
  }

  return (mounted && ref.current) ? createPortal((
    <div className={classes.content} onClick={handleClick} ref={contentRef}>
      <div className={cn(classes.innerContent, className)}>
        {children}
      </div>
    </div>
  ), ref.current) : null
}

export default BaseModel;