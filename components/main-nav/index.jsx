import classes from './index.module.css';
import Container from "@/components/container";
import Image from "next/image";
import { useStyles } from "@/context/StyleContext";
import { scrollTo } from "@/utils";

function MainNav() {
  const { isMobile } = useStyles();

  const routes = ['О программе', 'Тарифы', 'Вопросы и ответы', 'Список клиник']

  const renderedRoutes = routes.map((route, index) => {
    const handleClick = () => {
      if (index === 0)
        scrollTo("main-inclusions")

      if (index === 1)
        scrollTo("main-cost")

      if (index === 2)
        scrollTo("main-questions")

      if (index === 3)
        scrollTo("main-footer")
    }

    return (
      <p key={route} className={classes.route} onClick={handleClick}>{route}</p>
    );
  })

  return (
    <div className={classes.content}>
      <Container className={classes.innerContent}>
        <Image src='/images/logo.png' alt='logo' width={100} height={27} />

        {!isMobile && (
          <div className={classes.routes_content}>
            {renderedRoutes}
          </div>
        )}
      </Container>
    </div>
  )
}

export default MainNav;