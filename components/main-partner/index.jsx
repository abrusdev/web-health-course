import classes from "./index.module.css";
import { Container } from "@mui/material";
import Image from "next/image";
import { useStyles } from "@/pages/context/StyleContext";

function MainPartner() {
  const { isMobile } = useStyles();

  return (
    <Container className={classes.content}>
      <h1>Партнёр</h1>

      <div className={classes.innerContent}>
        <Image src="/images/partner_1.png" alt="partner" width={isMobile ? 195 : 348} height={isMobile ? 48 : 90} />
        <div className={classes.phone}>
          <Image src='/icons/ic_phone.svg' alt='phone' width={isMobile ? 13 : 27} height={isMobile ? 13 : 27} />
          +7 (800) 301-86-44
        </div>
      </div>
    </Container>
  )
}

export default MainPartner