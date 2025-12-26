import { useState } from "react";
import { dateArray, strategyArray } from "./Components/Data/Data.jsx";
import DateDropdown from "./Components/DateDropdown.jsx";
import StrategyCards from "./Components/StrategyCards.jsx";
import ViewToggle from "./Components/ViewToggle.jsx";



function App() {
  const [activeView, setActiveView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  // console.log("dateArray", dateArray);
  // console.log("strategyArray", strategyArray);

  const selectedView = strategyArray.find((item) => item.View === activeView);
  // console.log("selectedView", selectedView);

  const strategies = selectedView?.Value[selectedDate] || [];
  // console.log("strategies", strategies);

  return (
    <>
    <div className="container">
      <ViewToggle 
      activeView={activeView}
       setActiveView={setActiveView} 
       />
      <DateDropdown
        dates={dateArray}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <StrategyCards strategies={strategies} selectedDate={selectedDate} />
    </div>
    </>
  );
}

export default App;
