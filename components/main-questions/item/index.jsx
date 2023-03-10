import classes from './index.module.css';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function MainQuestionItem({ item, isLast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState();

  const templateRef = useRef();

  useEffect(() => {
    const height = templateRef.current.clientHeight + 40

    setContentHeight(isOpen ? height : 0);
  }, [isOpen])

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classes.content} onClick={handleClick}>
      <p className={classes.template} style={{ height: "auto" }} ref={templateRef}>
        <span>{item.content}</span>
      </p>

      <div className={classes.titleContent}>
        <p className={classes.title}>{item.title}</p>
        <Image src={`/icons/${isOpen ? 'ic_minus' : 'ic_plus'}.svg`} alt='expand' width={24} height={24} />
      </div>

      <p className={classes.desc} style={{ height: contentHeight }}>
        <span>{item.content}</span>
      </p>
    </div>
  )
}

export default MainQuestionItem