import classes from './index.module.css';

function MainContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  )
}

export default MainContent