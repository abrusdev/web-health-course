import classes from "./index.module.css";
import Container from "@/components/container";
import MainCostTab from "@/components/main-cost/tab.index";
import { useState } from "react";
import MainCostTariff from "@/components/main-cost/tariff";
import Image from "next/image";
import { useStyles } from "@/pages/context/StyleContext";
import MainCostRegistration from "@/components/main-cost/registration";
import { useRegistration } from "@/pages/context/RegistrationContext";
import data from "./data.json";

function MainCost() {
  const { data: registerData, setData: setRegisterData } = useRegistration();
  const { isMobile } = useStyles();

  const [step, setStep] = useState(-1);

  const [selectedTab, setSelectedTab] = useState(0);

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
    setRegisterData({ ...registerData, holder_type: selectedTab, tariff_type: id, insureds: [{}] })
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
                       onClick={() => handleSelectTab(0)} />
          <MainCostTab title='Для юридических лиц/ ИП' isActive={step !== -1 && selectedTab === 1}
                       onClick={() => handleSelectTab(1)} />
        </div>

        <MainCostTariff tariff={data.tariffs[selectedTab]} isVisible={step === 0} onSelect={goToRegistration} />

        <MainCostRegistration tariff={data.tariffs[selectedTab]} isVisible={step === 1} />

      </Container>
    </div>
  )
}

export default MainCost