import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import PropTypes from "prop-types";

DateTime.propTypes = {
  value: PropTypes.object,
  setValue: PropTypes.object,
};

export default function DateTime({ value, setValue }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Date and Time"
        // value={value.dateTime}
        onChange={(date) => setValue({ ...value, dateTime: date })}
      />
    </LocalizationProvider>
  );
}
