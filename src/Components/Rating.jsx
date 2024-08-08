import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";

BasicRating.propTypes = {
  number: PropTypes.number,
};

export default function BasicRating({ number }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="read-only"
        value={number}
        readOnly
      />
    </Box>
  );
}
