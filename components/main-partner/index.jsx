import classes from "./index.module.css";
import { Container } from "@mui/material";
import Image from "next/image";

function MainPartner() {

  return (
    <Container className={classes.content}>
      <h2>Партнёр</h2>

      <div className={classes.innerContent}>
        <Image src="/images/partner_1.png" alt="partner" width={340} height={90} />
        <div className={classes.phone}>
          <Image src='/icons/ic_phone.svg' alt='phone' width={27} height={27} />
          +7 (800) 301-86-44
        </div>
      </div>
    </Container>
  )
}

export default MainPartner