import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function GuestCount() {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Guest Count</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        label="Guest Count"
        // onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
