import MainNav from "@/components/main-nav";
import MainHeader from "@/components/main-header";
import MainInclusions from "@/components/main-inclusions";
import MainCredibility from "@/components/main-credibility";
import MainCost from "@/components/main-cost";
import MainQuestions from "@/components/main-questions";
import MainPartner from "@/components/main-partner";
import MainFooter from "@/components/main-footer";
import MainFooterMobile from "@/components/main-footer/mobile";
import { useStyles } from "@/context/StyleContext";
import Loader from "@/components/loader";

function HomePage() {

  const { isMobile } = useStyles();

  return (
    <>
      <MainNav />

      <MainHeader />

      <MainInclusions />

      <MainCredibility />

      <MainCost />

      <MainQuestions />

      <MainPartner />

      {
        isMobile
          ?
          <MainFooterMobile />
          :
          <MainFooter />
      }
    </>
  )
}

export default HomePage;