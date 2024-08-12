import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "../Style/ChipList.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

ChipList.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

export default function ChipList({ title, value }) {
  const [active, setActive] = useState();

  return (
    <>
      <Typography sx={{ fontFamily: "karla", fontSize: 20 }}>
        {title}
      </Typography>
      <Stack
        direction="row"
        spacing={4}
      >
        <div className="containerChipList">
          {value.map((label) => (
            <Chip
              key={label}
              label={label}
              onClick={() => setActive(label)}
              variant={active === label ? undefined : "outlined"}
            />
          ))}
        </div>
      </Stack>
    </>
  );
}
