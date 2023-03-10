import classes from './index.module.css';
import Container from "@/components/container";
import Button from "@/components/button";
import { scrollTo } from "@/utils";
import { useRegistration } from "@/context/RegistrationContext";

function MainHeader(props) {

  const { setStep } = useRegistration();

  const handleClick = () => {
    setStep(0);

    setTimeout(() => {
      scrollTo("main-cost")
    }, 600);
  }

  return (
    <div className={classes.content}>
      <img className={classes.right_cover} src='/images/cover_main_1.svg' alt='cover' />
      <img className={classes.left_cover} src='/images/cover_main_2.svg' alt='cover' />

      <Container>
        <div className={classes.inner_content}>
          <h1>программа ДМС<br />«Курс здоровья»</h1>
          <p className={classes.desc}>Консультации и обследования в<br />комфортном формате</p>

          <img className={classes.center_cover} src='/images/cover_main_3.svg' alt="cover" />

          <Button className={classes.btn_content} width={'100%'} height={55} onClick={handleClick}>Оформить</Button>
        </div>
      </Container>
    </div>
  )
}

export default MainHeader;