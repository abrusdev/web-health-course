import classes from "./index.module.css";
import { Container } from "@mui/material";
import data from "./data.json"
import MainCredibilityItem from "@/components/main-credibility/item";

function MainCredibility() {
  const renderedItems = data.map((item) => {
    return <MainCredibilityItem key={item.id} item={item} />
  })

  return (
    <>
      <Container className={classes.content}>
        <h1>Почему доверяют нам</h1>

        <div className={classes.innerContent}>
          {renderedItems}
        </div>
      </Container>
    </>
  )
}

export default MainCredibility