import classes from './index.module.css';
import Container from "@/components/container";
import Image from "next/image";

function MainNav() {
  const routes = ['О программе', 'Тарифы', 'Вопросы и ответы', 'Список клиник']

  const renderedRoutes = routes.map((route) => {
    return (
      <p key={route} className={classes.route}>{route}</p>
    );
  })

  return (
    <Container>
      <div className={classes.content}>
        <Image src='/images/logo.png' alt='logo' width={100} height={27} />

        <div className={classes.routes_content}>
          {renderedRoutes}
        </div>
      </div>
    </Container>
  )
}

export default MainNav;