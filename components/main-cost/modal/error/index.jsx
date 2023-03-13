import classes from "./index.module.css";
import BaseModel from "@/components/main-cost/modal/base";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

function ErrorModel({ message, onCancel }) {

  return (
    <BaseModel onCancel={onCancel} className={classes.content}>
      <div className={classes.close} onClick={onCancel}>
        <CloseIcon />
      </div>
      <p className={classes.title}>Ошибка!</p>
      <p className={classes.desc}>{message}</p>
    </BaseModel>
  )
}

export default ErrorModel;