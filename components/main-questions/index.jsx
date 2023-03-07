import classes from "./index.module.css";
import Container from "@/components/container";
import data from "./data.json";
import MainQuestionItem from "@/components/main-questions/item";

function MainQuestions() {

  const renderedItems = data.map((item) => {
    return (
      <MainQuestionItem key={item.id} item={item} isLast={data.at(-1).id === item.id} />
    )
  })

  return (
    <Container className={classes.content}>
      <h1 className={classes.title}>Вопросы и ответы</h1>

      <div className={classes.innerContent}>
        {renderedItems}
      </div>
    </Container>
  )
}

export default MainQuestions;