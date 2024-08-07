import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "../Style/Chips.css";

export default function Chips({ title, label1, label2, label3, label4 }) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <>
      <h1>{title}</h1>
      <Stack
        direction="row"
        spacing={4}
      >
        <Chip
          label={label1}
          onClick={handleClick}
        />
        <Chip
          label={label2}
          variant="outlined"
          onClick={handleClick}
        />
        <Chip
          label={label3}
          variant="outlined"
          onClick={handleClick}
        />
        <Chip
          label={label4}
          variant="outlined"
          onClick={handleClick}
        />
      </Stack>
    </>
  );
}
