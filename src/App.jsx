

import { useState } from "react";
import { dateArray, strategyArray } from "./components/Data/data.jsx";
import DateDropdown from "./components/DateDropdown.jsx";
import StrategyCards from "./components/StrategyCards.jsx";
import ViewToggle from "./components/ViewToggle.jsx";



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
