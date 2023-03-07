import classes from "./index.module.css";
import Container from "@/components/container";
import MainCostTab from "@/components/main-cost/tab.index";
import { useState } from "react";
import MainCostTariff from "@/components/main-cost/tariff";
import data from "./data.json";
import Image from "next/image";
import { useStyles } from "@/pages/context/StyleContext";
import MainCostRegistration from "@/components/main-cost/registration";

function MainCost() {
  const { isMobile } = useStyles();

  const [step, setStep] = useState(-1);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (tab) => {
    const isAlreadySelected = tab === selectedTab;

    if (step !== -1) {
      setStep(-1)

      if (!isAlreadySelected)
        setTimeout(() => {
          setSelectedTab(tab);
          setStep(0);
        }, 600);
    } else {
      setSelectedTab(tab);
      setStep(0);
    }
  }

  return (
    <div className={classes.content}>
      {!isMobile && (
        <div className={classes.cover}>
          <Image src="/images/cover_main_4.png" alt="cover" width={178} height={356} />
        </div>
      )}

      {!isMobile && (
        <div className={classes.cover2}>
          <Image src="/images/cover_main_5.png" alt="cover" width={410} height={617} />
        </div>
      )}

      <Container className={classes.innerContent}>
        <h1>Узнайте стоимость программы</h1>

        <div className={classes.tabsContent}>
          <MainCostTab title='Для физических лиц' isActive={step !== -1 && selectedTab === 0}
                       onClick={() => handleTabSelect(0)} />
          <MainCostTab title='Для юридических лиц/ ИП' isActive={step !== -1 && selectedTab === 1}
                       onClick={() => handleTabSelect(1)} />
        </div>

        <MainCostTariff tariff={data.tariffs[selectedTab]} isVisible={step === 0} onSelect={() => setStep(1)} />

        <MainCostRegistration tariff={data.tariffs[selectedTab]} isVisible={step === 1} />

      </Container>
    </div>
  )
}

export default MainCost