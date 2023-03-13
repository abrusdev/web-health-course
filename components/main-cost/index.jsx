import classes from "./index.module.css";
import Container from "@/components/container";
import MainCostTab from "@/components/main-cost/tab.index";
import { useState } from "react";
import MainCostTariff from "@/components/main-cost/tariff";
import Image from "next/image";
import MainCostRegistration from "@/components/main-cost/registration";
import data from "./data.json";
import { useRegistration } from "@/context/RegistrationContext";
import { useStyles } from "@/context/StyleContext";
import { scrollTo } from "@/utils";

function MainCost() {
  const { data: registerData, setData: setRegisterData, step, setStep } = useRegistration();
  const { isMobile } = useStyles();

  const [selectedTab, setSelectedTab] = useState(1);

  const handleSelectTab = (tab) => {
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

  const goToRegistration = (id) => {
    setStep(1)
    setRegisterData({ holder_type: selectedTab, tariff_type: id, insureds: [{}] })
  }

  const goToPayment = (id) => {
    setStep(2)

    setTimeout(() => {
      scrollTo("main-cost")
    }, 600)
  }


  return (
    <div className={classes.content} id="main-cost">
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
                       onClick={() => handleSelectTab(0)} />
          <MainCostTab title='Для юридических лиц/ ИП' isActive={step !== -1 && selectedTab === 1}
                       onClick={() => handleSelectTab(1)} />
        </div>

        <MainCostTariff tariff={data.tariffs[selectedTab]} isVisible={step === 0} onSelect={goToRegistration} />

        <MainCostRegistration
          tariff={data.tariffs[selectedTab]}
          step={step} isVisible={step === 1 || step === 2}
          onSubmit={goToPayment} />

      </Container>
    </div>
  )
}

export default MainCost