import classes from "./index.module.css";
import Container from "@/components/container";
import data from "./data.json"
import MainInclusionItem from "@/components/main-inclusions/item";
import { useStyles } from "@/pages/context/StyleContext";
import { useEffect, useState } from "react";

function MainInclusions() {
  const { isMobile } = useStyles();

  const [list, setList] = useState(data)

  useEffect(() => {
    if (!isMobile) {
      setList([...data.slice(0, 3), { "id": -1 }, ...data.slice(3)])
    } else  {
      let newList = [];

      data.forEach((item) => {
        newList.push(item);
        newList.push({ id: -1 });
      })

      setList(newList);
    }
  }, [isMobile])

  const renderedItems = list.map((item) => {
    if (item.id === -1) {
      return (
        <div key={Math.random()} style={{ flexBasis: '100%', height: 30 }}></div>
      )
    }

    return (
      <MainInclusionItem key={item.id} item={item} />
    )
  })

  return (
    <Container className={classes.content}>
      <h1>Что включено в программу</h1>

      <div className={classes.innerContent}>
        {renderedItems}
      </div>
    </Container>
  )
}

export default MainInclusions;