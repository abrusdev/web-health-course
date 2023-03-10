import classes from "./index.module.css";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import BaseModel from "@/components/main-cost/modal/base";

function ExcelModal({ onCancel, onSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDownload = (e) => {
    e.preventDefault();
    window.open('https://kz-backend.vsk-trust.ru/api/v1/kz/excel_example')
  }

  const handleUpload = (e) => {
    e.preventDefault()
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      axios({
        method: "post",
        url: "https://kz-backend.vsk-trust.ru/api/v1/kz/excel_send",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((({ data }) => {
          onSuccess(data.data)
        }));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BaseModel className={classes.content} onCancel={onCancel}>
      <form className={classes.innerContent}>
        <img src='/images/cover_main_7.png' alt='cover' className={classes.cover1} />
        <img src='/images/cover_main_6.png' alt='cover' className={classes.cover2} />

        <h4 className={classes.title}>Добавить Застрахованных списком</h4>

        <p className={classes.desc}>Чтобы упростить процесс заполнения данных, скачайте и заполните по образцу бланк в
          формате excel.</p>

        <div className={classes.btnContent}>
          <div className={classes.btnInnerContent}>
            <h5 className={classes.label}>Скачать форму для заполнения</h5>
            <button className={classes.firstBtn} onClick={handleDownload}>Скачать</button>
          </div>

          <div className={classes.btnInnerContent}>
            <h5 className={classes.label}>Загрузить список по форме</h5>

            <input id="fileUpload" type="file" style={{ display: "none" }}
                   onChange={(event) => setSelectedFile(event.target.files[0])} />
            <label for="fileUpload" className={classes.secondBtn}>Выбрать файл</label>
          </div>
        </div>

        <button className={classes.thirdBtn} onClick={handleUpload}>Отправить данные</button>
      </form>
    </BaseModel>
  );
}

export default ExcelModal;