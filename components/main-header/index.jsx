import classes from './index.module.css';
import Container from "@/components/container";
import Button from "@/components/button";

function MainHeader(props) {
  return (
    <div className={classes.content}>
      <img className={classes.right_cover} src='/images/cover_main_1.svg' alt='cover' />
      <img className={classes.left_cover} src='/images/cover_main_2.svg' alt='cover' />

      <Container>
        <div className={classes.inner_content}>
          <h1 className={classes.title}>программа ДМС<br />«Курс здоровья»</h1>
          <p className={classes.desc}>Консультации и обследования в<br />комфортном формате</p>

          <Button className={classes.btn_content}>Hello</Button>
        </div>
      </Container>
    </div>
  )
}

export default MainHeader;