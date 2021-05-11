import { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const Calendar: React.FC = () => {
  return (
    <>
      <DayPicker locale={"ru"} />
    </>
  );
};

export default Calendar;
