import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "../Style/Chips.css";
import { useState } from "react";
import PropTypes from "prop-types";

ChipList.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

export default function ChipList({ title, value }) {
  const [active, setActive] = useState();

  return (
    <>
      <h1>{title}</h1>
      <Stack
        direction="row"
        spacing={4}
      >
        {value.map((label) => (
          <Chip
            key={label}
            label={label}
            onClick={() => setActive(label)}
            variant={active === label ? undefined : "outlined"}
          />
        ))}
      </Stack>
    </>
  );
}
