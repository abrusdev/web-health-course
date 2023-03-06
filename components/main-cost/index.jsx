import classes from "./index.module.css";
import Container from "@/components/container";
import MainCostTab from "@/components/main-cost/tab.index";
import { useState } from "react";
import MainCostTariff from "@/components/main-cost/tariff";
import data from "./data.json";
import Image from "next/image";

function MainCost() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleTabSelect = (tab) => {
    const isAlreadySelected = tab === selectedTab;

    if (isVisible) {
      setIsVisible(false)

      if (!isAlreadySelected)
        setTimeout(() => {
          setSelectedTab(tab);
          setIsVisible(true);
        }, 600);
    } else {
      setSelectedTab(tab);
      setIsVisible(true);
    }
  }

  return (
    <div className={classes.content}>
      <div className={classes.cover}>
        <Image src="/images/cover_main_4.png" alt="cover" width={178} height={356} />
      </div>

      <div className={classes.cover2}>
        <Image src="/images/cover_main_5.png" alt="cover" width={410} height={617} />
      </div>

      <Container className={classes.innerContent}>
        <h2>Узнайте стоимость программы</h2>

        <div className={classes.tabsContent}>
          <MainCostTab title='Для физических лиц' isActive={isVisible && selectedTab === 0} onClick={() => handleTabSelect(0)} />
          <MainCostTab title='Для юридических лиц/ ИП' isActive={isVisible && selectedTab === 1}
                       onClick={() => handleTabSelect(1)} />
        </div>

        <MainCostTariff tariff={data.tariffs[selectedTab]} isVisible={isVisible} />
      </Container>
    </div>
  )
}

export default MainCost