export default function DateDropdown({ dates, selectedDate, setSelectedDate }) {
  return (
    console.log("dates",dates),
    console.log("selectedDate",selectedDate),
    <select
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
    >
      {dates.map(date => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
}
