import classes from "./index.module.css";
import Container from "@/components/container";
import MainCostTab from "@/components/main-cost/tab.index";
import { useState } from "react";
import MainCostTariff from "@/components/main-cost/tariff";
import data from "./data.json";

function MainCost() {
  const [selectedTab, setSelectedTab] = useState(-1);

  const handleTabSelect = (tab) => {
    const isAlreadySelected = tab === selectedTab;

    if (selectedTab !== -1) {
      setSelectedTab(-1);

      if (!isAlreadySelected)
        setTimeout(() => {
          setSelectedTab(tab)
        }, 600);
    } else {
      setSelectedTab(isAlreadySelected ? -1 : tab)
    }
  }

  return (
    <Container className={classes.content}>
      <h2>Узнайте стоимость программы</h2>

      <div className={classes.tabsContent}>
        <MainCostTab title='Для физических лиц' isActive={selectedTab === 0} onClick={() => handleTabSelect(0)} />
        <MainCostTab title='Для юридических лиц/ ИП' isActive={selectedTab === 1} onClick={() => handleTabSelect(1)} />
      </div>

      <MainCostTariff tariff={data.tariffs[selectedTab] ?? data.tariffs[0]} isVisible={selectedTab !== -1} />
    </Container>
  )
}

export default MainCost