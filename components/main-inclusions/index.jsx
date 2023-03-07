import classes from "./index.module.css";
import Container from "@/components/container";
import data from "./data.json"
import MainInclusionItem from "@/components/main-inclusions/item";

function MainInclusions() {
  const renderedItems = data.map((item) => {
    if (item.id === -1) {
      return (
        <div key={Math.random()} style={{flexBasis: '100%', height: 30}}></div>
      )
    }
    return (
      <MainInclusionItem key={item.id} item={item} />
    )
  })

  return (
    <Container className={classes.content}>
      <h2>Что включено в программу</h2>

      <div className={classes.innerContent}>
        {renderedItems}
      </div>
    </Container>
  )
}

export default MainInclusions;