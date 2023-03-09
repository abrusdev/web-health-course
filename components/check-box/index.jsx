import classes from "./index.module.css"
import { Checkbox } from "@mui/material";

function CheckBox({ mt }) {
  return (
    <div>
      <Checkbox style={{ marginTop: mt }} color="success"/>
    </div>
  );
}

export default CheckBox;