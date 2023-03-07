import classes from "./getItemById.module.css";

function getItemById(id) {
    if (id === 1) {
        return (
            <>
                <h5 className={classes.title}>Удобный персональный сервис</h5>
                <ul className={classes.withDotsContent}>
                    <span>Застрахованный может обращаться за любыми услугами через свой Личный кабинет</span>
                    <span>
            Нет привязки к конкретному медучреждению: для очных приёмов и обследований застрахованным доступны
            ближайшие к дому или работе отделения
          </span>
                    <span>Персональный врач контролирует весь ход выздоровления застрахованного</span>
                </ul>
            </>
        )
    }

    if (id === 2) {
        return (
            <>
                <h5 className={classes.title}>Обследование и диагностика</h5>
                <ul className={classes.withDotsContent}>
                    Застрахованным доступны:
                    <span> 17 500+ видов лабораторных исследований</span>
                    <span>
                        Популярные виды инструментальных исследований:
                        <ul className={classes.withDashContent}>
                          <span>УЗИ</span>
                    <span>ЭКГ</span>
                    <span>эхокардиограмма</span>
                    <span>эндоскопические исследования</span>
                    <span>и другие</span>
                        </ul>

                    </span>

                </ul>
            </>
        )
    }

    if (id === 3) {
        return (
            <>
                <h5 className={classes.title}>Выезд терапевта на дом</h5>
                <ul className={classes.withDotsContent}>
                    <span>Сотрудники в 2 клика смогут вызвать врача на дом без долгих очередей в поликлинике и звонков в регистратуру</span>
                </ul>
            </>
        )
    }
    if (id === 4) {
        return (
            <>
                <h5 className={classes.title}>Телемедицина</h5>
                <ul className={classes.withDotsContent}>
                    <span>Замена очных посещений для сотрудников онлайн-консультациями по ряду медицинских вопросов:
                        <ul className={classes.withDashContent}>
                            <span>уточнение диагноза,</span>
                            <span> назначение анализов, </span>
                            <span>подбор аналогов лекарств</span>
                            <span>оперативные ответы на вопросы о здоровье</span>
                            <span>консультации по медицинскому праву.</span>
                        </ul>
                    </span>
                    <span>Безлимитное обращение застрахованных к врачам 60+ направлений</span>
                </ul>
            </>
        )
    }
    if (id === 5) {
        return (
            <>
                <h5 className={classes.title}>Очные приемы</h5>
                <ul className={classes.withDotsContent}>
                    <span>Сотрудникам доступен приём врачей всех актуальных направлений</span>
                    <span>Широкий выбор специалистов для проведения очных осмотров, подтверждения и постановки диагноза, получения больничного</span>
                    <span>
                        Запись к специалисту осуществляется в личном кабинете с выбором удобной даты и времени приёма</span>
                </ul>
            </>
        )
    }

    if (id === 6) {
        return (
            <>
                <h5 className={classes.title}>Дополнительные сервисы</h5>
                <ul className={classes.withDotsContent}>
                    Основную программу для сотрудников всегда можно дополнить услугами:
                    <span>генетическим тестированием</span>
                    <span>сезонной вакцинацией</span>
                    <span>онлайн-фитнесом</span>
                </ul>
                <button className={classes.button}>
                    Узнать больше
                </button>
            </>
        )
    }
    return (
        <></>
    )
}

export default getItemById;