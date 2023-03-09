import { Checkbox } from "@mui/material";

function CheckBox({ mt, value, onChange }) {

  const handleChange = (e) => {
    if (onChange)
    onChange(e.target.checked)
    console.log(e.target.checked)
  }

  return (
    <div>
      <Checkbox style={{ marginTop: mt }} color="success" checked={value} onChange={handleChange} />
    </div>
  );
}

export default CheckBox;