import classes from "./index.module.css";
import Container from "@/components/container";
import data from "./data.json";
import MainQuestionItem from "@/components/main-questions/item";

function MainQuestions() {

  const renderedItems = data.map((item) => {
    return (
      <MainQuestionItem key={item.id} item={item}/>
    )
  })

  return (
    <Container className={classes.content}>
      <h2 className={classes.title}>Вопросы и ответы</h2>

      {renderedItems}
    </Container>
  )
}

export default MainQuestions;