import classes from "./index.module.css";
import Container from "@/components/container";
import MainCostTab from "@/components/main-cost/tab.index";
import { useState } from "react";

function MainCost() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (tab) => {
    setSelectedTab(tab)
  }

  return (
    <Container className={classes.content}>
      <h2>Узнайте стоимость программы</h2>

      <div className={classes.tabsContent}>
        <MainCostTab title='Для физических лиц' isActive={selectedTab === 0} onClick={() => handleTabSelect(0)} />
        <MainCostTab title='Для юридических лиц/ ИП' isActive={selectedTab === 1} onClick={() => handleTabSelect(1)} />
      </div>
    </Container>
  )
}

export default MainCost