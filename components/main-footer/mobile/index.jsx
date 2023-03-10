import classes from './index.module.css'
import Link from "next/link";
import { cn } from "@/utils";
import Image from "next/image";

function MainFooterMobile() {

  return (
    <>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          {/*<div className={classes.leftContent}>*/}
          {/*  <div className={classes.linksContent}>*/}
          {/*    <div className={classes.linksInnerContent}>*/}
          {/*      <h3 className={classes.title}>ОФОРМИТЬ ПОЛИС</h3>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Авто</a>*/}
          {/*      </Link>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Путешествия</a>*/}
          {/*      </Link>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Здоровье</a>*/}
          {/*      </Link>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Имущество</a>*/}
          {/*      </Link>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Активировать полис</a>*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*    <div className={classes.linksInnerContent}>*/}
          {/*      <h3 className={classes.title}>ИНФОРМАЦИЯ</h3>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Офисы продаж по РФ</a>*/}
          {/*      </Link>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Документы</a>*/}
          {/*      </Link>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Правила и тарифы</a>*/}
          {/*      </Link>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Обработка персональных данных</a>*/}
          {/*      </Link>*/}

          {/*      <Link href="https://www.google.com/" legacyBehavior>*/}
          {/*        <a className={classes.link}>Карта сайтато</a>*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className={classes.rightContent}>*/}
          {/*  <h3>ПОДПИШИТЕСЬ НА НАС</h3>*/}
          {/*  <div className={classes.topImages}>*/}
          {/*    <img src="/icons/social/ic_wk.svg" alt="vk" />*/}
          {/*    <img src="/icons/social/ic_ok.svg" alt="ok" />*/}
          {/*    <img src="/icons/social/ic_twitter.svg" alt="twitter" />*/}
          {/*  </div>*/}
          {/*  <div className={classes.bottomImages}>*/}
          {/*    <img src="" alt="" />*/}
          {/*    <img src="" alt="" />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className={classes.description}>
            <p className={cn(classes.mt55, classes.firstText)}>
              Лицензия Банка России от 11.09.2015: СЛ №0621, СИ №0621, ОС №0621, ОС №0621-04, ОС №0621-05, ПС №0621.
              Предложения о страховании по добровольным видам имущественного страхования не являются публичной офертой,
              решение о заключении договора страхования на конкретных условиях принимается только по соглашению сторон.
              Информация о видах и условиях страхования размещена в соответствии с требованиями пункта 6 статьи 6 Закона
              РФ
              от 27.11.1992 № 4015-1 «Об организации страхового дела в Российской Федерации».
            </p>

            <p className={cn(classes.mt55, classes.secondText)}>
              Информацию, подлежащую раскрытию в соответствии с требованиями Федерального закона «О рынке ценных бумаг»
              (от
              22.04.1996 N 39-ФЗ) и Положения о раскрытии информации эмитентами эмиссионных ценных бумаг (утв. Банком
              России
              30.12.2014 N 454-П), САО «ВСК» раскрывает на странице в сети Интернет ООО «Интерфакс-ЦРКИ» –
              информационного
              агентства, аккредитованного ЦБ РФ на раскрытие информации.
            </p>
          </div>

          <div className={classes.divider}></div>

          <div className={cn(classes.innerContent, classes.mt30)}>
            <p className={classes.description}>
              1992–2023 Страховое акционерное общество «ВСК»<br />
              Россия, Москва, 121552, ул. Островная, 4
            </p>
            <Image className={classes.img} src='/images/logo_black_white.png' alt='logo' width={95} height={30} />
          </div>


        </div>
      </div>
    </>
  )
}

export default MainFooterMobile;