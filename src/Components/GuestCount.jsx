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
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={14}>14</MenuItem>
        <MenuItem value={16}>16</MenuItem>
      </Select>
    </FormControl>
  );
}
