import classes from './index.module.css';
import Container from "@/components/container";
import Image from "next/image";
import { useStyles } from "@/pages/context/StyleContext";

function MainNav() {
  const { isMobile } = useStyles();

  const routes = ['О программе', 'Тарифы', 'Вопросы и ответы', 'Список клиник']

  const renderedRoutes = routes.map((route) => {
    return (
      <p key={route} className={classes.route}>{route}</p>
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