import classes from './index.module.css';

function MainQuestionItem({ item }) {

  return (
    <div className={classes.content}>
      <p className={classes.title}>Как записаться на онлайн-консультацию с врачом?</p>
    </div>
  )
}

export default MainQuestionItem